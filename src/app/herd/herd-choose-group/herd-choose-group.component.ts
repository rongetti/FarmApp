import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { HerdService } from '../herd.service';

@Component({
  templateUrl: './herd-choose-group.component.html',
  styleUrls: ['./herd-choose-group.component.css']
})
export class HerdChooseGroupComponent implements OnInit {

  public groups = [];
  public showLoader = false;
  public loaderLabel: string;

  constructor(
    public herdService: HerdService,
    public dialog: MatDialogRef<HerdChooseGroupComponent>
  ) { }

  ngOnInit() {
    this.getGroups();
  }

  private getGroups() {
    this.herdService.getGroups().then((data) => this.groups = data.docs);
  }

  public add(group) {
    this.showLoader = true;
    this.loaderLabel = 'Adding to group...';
    this.herdService.getGroups(group).then(data => {
      this.herdService.currentSelection.forEach(tag => {
        if (data.docs[0]['animals'].indexOf(tag) === -1) {
          data.docs[0]['animals'].push(tag);
        }
      });
      return this.herdService.updateGroup(data.docs[0]);
    }).then(() => {
      this.showLoader = false;
      this.dialog.close({success: true, name: group});
    });
  }

  public cancel() {
    this.dialog.close();
  }

}
