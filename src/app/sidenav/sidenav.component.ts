import { Component, OnInit } from '@angular/core';

import { ANIMATE_BACKBTN } from '../const/animations';
import { HerdService } from '../herd/herd.service';
import { SidenavService } from '../sidenav.service';

@Component({
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations: ANIMATE_BACKBTN
})
export class SidenavComponent implements OnInit {

  public backbtnState: string;
  public messages = 0;

  constructor(
    public herdService: HerdService,
    private sidenavService: SidenavService
  ) { }

  ngOnInit() {
    this.backbtnState = 'hide';
    this.sidenavService.openedStartEvent$.subscribe(() => this.backbtnState = 'show');
    this.sidenavService.closedStartEvent$.subscribe(() => this.backbtnState = 'hide');
  }

  public closeSidenav() {
    this.sidenavService.close().then(() => this.backbtnState = 'hide');
  }

}
