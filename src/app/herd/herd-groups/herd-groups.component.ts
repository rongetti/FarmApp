import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { HerdService } from '../herd.service';
import { HerdViewGroupComponent } from '../herd-view-group/herd-view-group.component';
import { HerdCreateGroupComponent } from '../herd-create-group/herd-create-group.component';

@Component({
  templateUrl: './herd-groups.component.html',
  styleUrls: ['./herd-groups.component.css']
})
export class HerdGroupsComponent implements OnInit {

  public groups = [];

  constructor(
    public herdService: HerdService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getGroups();
  }

  private getGroups() {
    this.herdService.getGroups().then((data) => this.groups = data.docs);
  }

  public refreshList() {
    this.getGroups();
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

    dialog.afterClosed().subscribe(result => {
      if (result) {
        if (result.success) {
          this.refreshList();
          if (result.deleted) {
            this.showNotification('Group "' + result.name + '" successfully deleted.');
          } else {
            this.showNotification('Group "' + result.name + '" updated.');
          }
        }
      }
    });
  }

  public createGroup() {
    let dialog = this.dialog.open(HerdCreateGroupComponent, {
      width: '100%',
      height: '100%',
      maxWidth: '100%',
      panelClass: 'fa-fullscreen-dialog'
    });

    dialog.afterClosed().subscribe(result => {
      if (result) {
        if (result.success) {
          this.refreshList();
          this.showNotification('Group "' + result.name + '" created.');
        }
      }
    });
  }

  private showNotification(message) {
    this.snackBar.open(message, '', {
      duration: 3000,
    });
  }

}
