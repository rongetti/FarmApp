import { Component, Inject, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatSlideToggle, MatTooltip } from '@angular/material';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import { HerdService } from '../herd.service';
import { DATE_FORMAT } from '../../const/date-format';

@Component({
  templateUrl: './herd-add-animal.component.html',
  styleUrls: ['./herd-add-animal.component.css'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: DATE_FORMAT},
  ]
})
export class HerdAddAnimalComponent {

  @ViewChild('dobInput') dobInput;
  @ViewChild('calfDateInput') calfDateInput;
  @ViewChild('boughtDateInput') boughtDateInput;
  @ViewChild('brandInput') brandInput;
  @ViewChild('notesInput') notesInput;
  @ViewChild('servedCheckbox') servedCheckbox: MatSlideToggle;
  @ViewChild('inCalfCheckbox') inCalfCheckbox: MatSlideToggle;
  @ViewChild('calvedCheckbox') calvedCheckbox: MatSlideToggle;
  @ViewChild('boughtInCheckbox') boughtInCheckbox: MatSlideToggle;
  @ViewChild('bornOnFarmCheckbox') bornOnFarmCheckbox: MatSlideToggle;
  @ViewChild('movedOutCheckbox') movedOutCheckbox: MatSlideToggle;
  @ViewChild('invalidFormTooltip') invalidFormTooltip: MatTooltip;

  @Output() refreshList: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    public herdService: HerdService,
    public dialog: MatDialogRef<HerdAddAnimalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {  }

  public showLoader = false;

  public maxDate = new Date();
  public minDate = new Date(1980, 0, 1);

  public isBull = false;

  public tagControl = new FormControl('', [Validators.required, Validators.pattern('[0-9]{5}')], this.checkIfTagExists.bind(this));
  public categoryControl = new FormControl('', [Validators.required]);
  public purposeControl = new FormControl('', [Validators.required]);
  public breedControl = new FormControl('', [Validators.required]);
  public dobControl = new FormControl('', [Validators.required]);
  public calfDateControl = new FormControl('', [Validators.required]);
  public boughtDateControl = new FormControl('', [Validators.required]);

  public categoryChange() {
    this.categoryControl.value === 'bull' ? this.isBull = true : this.isBull = false;
  }

  public boughtInChange() {
    this.bornOnFarmCheckbox.toggle();
  }

  public bornOnFarmChange() {
    this.boughtInCheckbox.toggle();
  }

  public trimInput($event) {
    $event.srcElement.value = $event.srcElement.value.trim();
  }

  public close() {
    this.dialog.close();
  }

  public done() {

    if (this.checkIfFormValid()) {

      this.showLoader = true;

      let data = {};
      data['tag'] = this.tagControl.value;
      data['category'] = this.categoryControl.value;
      data['purpose'] = this.purposeControl.value;
      data['breed'] = this.breedControl.value;
      data['dob'] = this.dobInput.nativeElement.value;
      data['brand'] = this.brandInput.nativeElement.value;
      data['notes'] = this.notesInput.nativeElement.value;
      data['boughtIn'] = this.boughtInCheckbox.checked;
      data['boughtDate'] = this.boughtInCheckbox.checked ? this.boughtDateInput.nativeElement.value : null;
      data['bornOnFarm'] = this.bornOnFarmCheckbox.checked;
      data['movedOut'] = this.movedOutCheckbox.checked;
      if (!this.isBull) {
        data['inCalf'] = this.inCalfCheckbox.checked;
        data['served'] = this.servedCheckbox.checked;
        data['calved'] = this.calvedCheckbox.checked;
        data['calfDate'] = this.calvedCheckbox.checked ? this.calfDateInput.nativeElement.value : null;
      }

      this.herdService.addAnimal(data).then(() => {
        this.showLoader = false;
        this.dialog.close({success: true, tag: data['tag']});
        this.refreshList.emit();
      });

    } else {
      this.invalidFormTooltip.show();
      setTimeout( () => {
        this.invalidFormTooltip.hide();
      }, 3000);
    }

  }

  private checkIfFormValid() {
    return this.tagControl.valid &&
      this.purposeControl.valid &&
      this.breedControl.valid &&
      this.dobControl.valid &&
      (!this.calvedCheckbox.checked || this.calfDateControl.valid) &&
      (!this.boughtInCheckbox.checked || this.boughtDateControl.valid);
  }

  private checkIfTagExists(tag: FormControl) {
    return this.herdService.getAnimalByTag(tag.value).then(data => {
        return data['tag'] === tag.value ? {checkIfTagExists: {valid: false}} : null ;
    }).catch(() => {
      return null;
    });
  }

}
