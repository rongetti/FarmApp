import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { HerdService } from '../herd.service';
import { HerdViewGroupComponent } from '../herd-view-group/herd-view-group.component';
import { HerdGroupsComponent } from '../herd-groups/herd-groups.component';

@Component({
  selector: 'app-herd-create-group',
  templateUrl: './herd-create-group.component.html',
  styleUrls: ['./herd-create-group.component.css']
})
export class HerdCreateGroupComponent extends HerdViewGroupComponent implements OnInit {

  constructor(
    public herdService: HerdService,
    public dialog: MatDialogRef<HerdGroupsComponent>,
    public addDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    super(herdService, dialog, addDialog, data);
  }

  ngOnInit() {
    
  }

}
