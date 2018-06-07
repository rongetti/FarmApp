import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as moment from 'moment';

import { HerdService } from '../herd.service';
import { HerdViewGroupComponent } from '../herd-view-group/herd-view-group.component';
import { HerdGroupsComponent } from '../herd-groups/herd-groups.component';

@Component({
  templateUrl: './herd-create-group.component.html',
  styleUrls: ['./herd-create-group.component.css']
})
export class HerdCreateGroupComponent extends HerdViewGroupComponent implements OnInit {

  @ViewChild('nameInput') nameInput;

  public group = {
    name: '',
    created: '',
    description: '',
    animals: []
  };

  constructor(
    public herdService: HerdService,
    public dialog: MatDialogRef<HerdGroupsComponent>,
    public addDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    super(herdService, dialog, addDialog, data);
    if (this.data) {
      this.group['animals'] = this.data;
    }
  }

  public nameControl = new FormControl('', [Validators.required], this.checkIfNameExists.bind(this));

  ngOnInit() {
    this.group.created = moment().format('DD/MM/YYYY');
  }

  private checkIfNameExists(name: FormControl) {
    return this.herdService.getGroups(name.value.trim()).then(data => {
      return data.docs[0]['name'] === name.value.trim() ? {checkIfNameExists: {valid: false}} : null ;
    }).catch(() => {
      return null;
    });
  }

  public done() {
    if (this.nameControl.valid) {
      this.showLoader = true;
      this.loaderLabel = 'Saving changes...';

      this.herdService.createGroup(this.group).then(() => {
        this.showLoader = false;
        this.dialog.close({success: true, name: this.group['name']});
      });
    }
  }

}
