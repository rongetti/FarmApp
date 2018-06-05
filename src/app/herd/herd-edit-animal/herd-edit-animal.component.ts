import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as moment from 'moment';

import { HerdService } from '../herd.service';
import { HerdAddAnimalComponent } from '../herd-add-animal/herd-add-animal.component';
import { DateFromStringPipe } from '../../shared/date-from-string.pipe';

export const DATE_FORMAT = {
  parse: {
    dateInput: 'DD/MM/YYYY'
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-herd-edit-animal',
  templateUrl: './herd-edit-animal.component.html',
  styleUrls: ['./herd-edit-animal.component.css'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: DATE_FORMAT},
  ]
})
export class HerdEditAnimalComponent extends HerdAddAnimalComponent {

  public animal = {};

  public dob: Date;
  public calfDate: Date;
  public boughtDate: Date;
  public isBull: boolean;

  constructor(
    public herdService: HerdService,
    public dialog: MatDialogRef<HerdAddAnimalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    super(herdService, dialog, data);
    this.getAnimal();
  }

  private getAnimal() {
    if (this.data.tag) {
      this.herdService.getAnimalByTag(this.data.tag).then( data => {
        this.animal = data;
        this.isBull = this.animal['category'] === 'bull';
        this.dob = new DateFromStringPipe().transform(this.animal['dob']);
        if (this.animal['calfDate']) {
          this.calfDate = new DateFromStringPipe().transform(this.animal['calfDate']);
        }
        if (this.animal['boughtDate']) {
          this.boughtDate = new DateFromStringPipe().transform(this.animal['boughtDate']);
        }
        this.servedCheckbox.checked = this.animal['served'];
        this.inCalfCheckbox.checked = this.animal['inCalf'];
        this.calvedCheckbox.checked = this.animal['calved'];
        this.boughtInCheckbox.checked = this.animal['boughtIn'];
        this.bornOnFarmCheckbox.checked = this.animal['bornOnFarm'];
        this.movedOutCheckbox.checked = this.animal['movedOut'];
      });
    }
  }

  public done() {
    this.showLoader = true;

    this.herdService.getAnimalByTag(this.data.tag).then(data => {
      Object.assign(data, this.animal);
      data['dob'] = moment(this.dob).format('DD/MM/YYYY');
      this.calvedCheckbox.checked ? data['calfDate'] = moment(this.calfDate).format('DD/MM/YYYY') : data['calfDate'] = null;
      this.boughtInCheckbox.checked ? data['boughtDate'] = moment(this.boughtDate).format('DD/MM/YYYY') : data['boughtDate'] = null;
      data['served'] = this.servedCheckbox.checked;
      data['inCalf'] = this.inCalfCheckbox.checked;
      data['calved'] = this.calvedCheckbox.checked;
      data['boughtIn'] = this.boughtInCheckbox.checked;
      data['bornOnFarm'] = this.bornOnFarmCheckbox.checked;
      data['movedOut'] = this.movedOutCheckbox.checked;
      if (this.isBull) {
        delete data['inCalf'];
        delete data['served'];
        delete data['calved'];
        delete data['calfDate'];
      }
      console.log(data);
      return this.herdService.updateAnimal(data);
    }).then(() => {
      this.showLoader = false;
      this.dialog.close({success: true, tag: this.animal['tag']});
    });
  }

  public resetAll() {
    this.getAnimal();
  }

  public deleteConfirm() {
    if (confirm('You are about to delete #' + this.data.tag + ' pemanently from herd?')) {
      this.showLoader = true;
      this.delete();
    }
  }

  private delete() {
    this.herdService.deleteAnimal(this.data.tag).then(() => {
      this.showLoader = false;
      this.dialog.close({success: true, deleted: true, tag: this.data.tag});
    });
  }

}
