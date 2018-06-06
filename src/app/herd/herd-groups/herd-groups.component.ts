import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { HerdService } from '../herd.service';
import { HerdViewGroupComponent } from '../herd-view-group/herd-view-group.component';

@Component({
  templateUrl: './herd-groups.component.html',
  styleUrls: ['./herd-groups.component.css']
})
export class HerdGroupsComponent implements OnInit {

  public groups = [];

  constructor(
    public herdService: HerdService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.herdService.getGroups().then((data) => this.groups = data.docs);
  }

  public viewGroup(name) {
    let dialog = this.dialog.open(HerdViewGroupComponent, {
      width: '100%',
      height: '100%',
      maxWidth: '100%',
      panelClass: 'fa-fullscreen-dialog',
      autoFocus: false,
      data: name
    });
  }

}
