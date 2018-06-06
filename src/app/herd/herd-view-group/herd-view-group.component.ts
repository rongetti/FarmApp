import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { HerdService } from '../herd.service';
import { DATE_FORMAT } from '../../const/date-format';
import { HerdGroupsComponent } from '../herd-groups/herd-groups.component';

@Component({
  selector: 'app-herd-view-group',
  templateUrl: './herd-view-group.component.html',
  styleUrls: ['./herd-view-group.component.css']
})
export class HerdViewGroupComponent implements OnInit {

  public group = {};

  constructor(
    public herdService: HerdService,
    public dialog: MatDialogRef<HerdGroupsComponent>,
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

  public close() {
    this.dialog.close();
  }

  public done() {
    console.log('gg');
  }

}
