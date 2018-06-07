import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { HerdService } from '../herd.service';
import { DATE_FORMAT } from '../../const/date-format';
import { HerdGroupsComponent } from '../herd-groups/herd-groups.component';
import { SelectDialogComponent } from '../../shared/select-dialog/select-dialog.component';

@Component({
  templateUrl: './herd-view-group.component.html',
  styleUrls: ['./herd-view-group.component.css']
})
export class HerdViewGroupComponent implements OnInit {

  public group = {};
  public showLoader = false;
  public loaderLabel: string;

  constructor(
    public herdService: HerdService,
    public dialog: MatDialogRef<HerdGroupsComponent>,
    public addDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.getGroup();
  }

  private getGroup() {
    this.herdService.getGroups(this.data).then(data => this.group = data.docs[0]);
  }

  public trimInput($event) {
    $event.srcElement.value = $event.srcElement.value.trim();
  }

  public applyAction(action) {
    if (action === 'delete') {
      this.deleteConfirm();
    }
  }

  public addAnimals() {
    this.showLoader = true;
    this.loaderLabel = 'Retrieving animals...';
    this.herdService.getAnimals().then(data => {
      let animals = data.docs.map(animal => animal['tag']);
      for (let animal of this.group['animals']) {
        let index = animals.indexOf(animal);
        animals.splice(index, 1);
      }
      return animals;
    }).then(animals => {
      this.showLoader = false;

      let dialog = this.addDialog.open(SelectDialogComponent, {
        width: '100%',
        height: '100%',
        maxWidth: '100%',
        panelClass: 'fa-fullscreen-dialog',
        autoFocus: false,
        data: {
          list: animals,
          title: 'Add to ' + this.group['name']
        }
      });

      dialog.afterClosed().subscribe(result => {
        if (result) {
          if (result.success && result.selected.length > 0) {
            this.group['animals'] = this.group['animals'].concat(result.selected);
          }
        }
      });

    });

  }

  public removeFromGroup(tag) {
    let index = this.group['animals'].indexOf(tag);
    this.group['animals'].splice(index, 1);
  }

  public close() {
    this.dialog.close();
  }

  public done() {
    this.showLoader = true;
    this.loaderLabel = 'Saving changes...';

    this.herdService.getGroups(this.data).then(data => {
      Object.assign(data.docs[0], this.group);
      return this.herdService.updateGroup(data.docs[0]);
    }).then(() => {
      this.showLoader = false;
      this.dialog.close({success: true, name: this.group['name']});
    });
  }

  public deleteConfirm() {
    if (confirm('You are about to delete ' + this.group['name'] + ' pemanently?')) {
      this.showLoader = true;
      this.delete();
    }
  }

  private delete() {
    this.herdService.getGroups(this.data).then((data) => {
      return this.herdService.deleteGroup(data.docs[0]['_id']);
    }).then(() => {
      this.showLoader = false;
      this.dialog.close({success: true, deleted: true, name: this.group['name']});
    });
  }

}
