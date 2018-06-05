import { Component } from '@angular/core';
import { SidenavService } from '../sidenav.service';

@Component({
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent  {

  constructor(
    private sidenavService: SidenavService
  ) { }

  public menu = [{
    link: '/dashboard',
    title: 'Dashboard',
    icon: 'assessment'
  }, {
    link: '/herd/list/all',
    title: 'Animals',
    icon: 'list'
  }, {
    link: '/herd/list/all',
    title: 'Farm',
    icon: 'home'
  }, {
    link: '/herd/list/all',
    title: 'Audit',
    icon: 'playlist_add_check'
  }];

  public admin = [{
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
    link: '/herd/list/all',
    title: 'Settings',
    icon: 'settings'
  }];

  public closeSidenav() {
    this.sidenavService.close().then(() => { });
  }

}
