import { Component } from '@angular/core';
import { SidenavService } from '../../sidenav.service';

@Component({
  templateUrl: './dashboard-toolbar.component.html',
  styleUrls: ['./dashboard-toolbar.component.css']
})
export class DashboardToolbarComponent {

  constructor(
    private sidenavService: SidenavService
  ) { }

  public openSidenav() {
    this.sidenavService.open().then(() => { });
  }

}
