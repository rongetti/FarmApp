import { Component, OnInit } from '@angular/core';

import { ANIMATE_BACKBTN } from '../const/animations';
import { SidenavService } from '../sidenav.service';

@Component({
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations: ANIMATE_BACKBTN
})
export class SidenavComponent implements OnInit {

  public backbtnState: string;

  constructor(
    private sidenavService: SidenavService
  ) { }

  public menu = [
    {
      link: '/dashboard',
      title: 'Dashboard',
      icon: 'assessment'
    }, {
      link: '/herd/list/all',
      title: 'Animals',
      icon: 'list'
    },
    {
      link: '/herd/list/all',
      title: 'Farm',
      icon: 'home'
    }, {
      link: '/herd/list/all',
      title: 'Audit',
      icon: 'playlist_add_check'
    }
  ];

  public admin = [
    {
      link: '/herd/list/all',
      title: 'Contacts',
      icon: 'contacts'
    }, {
      link: '/herd/list/all',
      title: 'Messages',
      icon: 'comment'
    }, {
      link: '/herd/list/all',
      title: 'Tutorials',
      icon: 'import_contacts'
    }, {
      link: '/settings',
      title: 'Settings',
      icon: 'settings'
    }
  ];

  ngOnInit() {
    this.backbtnState = 'hide';
    this.sidenavService.openedStartEvent$.subscribe(() => this.backbtnState = 'show');
    this.sidenavService.closedStartEvent$.subscribe(() => this.backbtnState = 'hide');
  }

  public closeSidenav() {
    this.sidenavService.close().then(() => this.backbtnState = 'hide');
  }

}
