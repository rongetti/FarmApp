import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { HerdViewGroupComponent } from '../../herd/herd-view-group/herd-view-group.component';


@Component({
  templateUrl: './select-dialog.component.html',
  styleUrls: ['./select-dialog.component.css']
})
export class SelectDialogComponent implements OnInit {

  public title: string;
  public searchableList: string[];
  public selectedList = [];

  constructor(
    public dialog: MatDialogRef<HerdViewGroupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.title = this.data.title;
    this.searchableList = this.data.list;
  }

  ngOnInit() {

  }

  public searchInList(value) {
    this.searchableList = this.data.list.filter(item => item.indexOf(value) > -1);
  }

  public selectionChange($event) {
    let tag = $event.option.value;
    if ($event.option.selected) {
      this.selectedList.push(tag);
    } else {
      let index = this.selectedList.indexOf(tag);
      this.selectedList.splice(index, 1);
    }
  }

  public close() {
    this.dialog.close();
  }

  public done() {
    this.dialog.close({success: true, selected: this.selectedList});
  }

}
