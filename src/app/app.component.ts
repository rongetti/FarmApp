import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

import { LocalStorageService } from './core/local-storage.service';
import { SidenavService } from './sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor(
    private sidenavService: SidenavService,
    private localStorageService: LocalStorageService
  ) {
    localStorageService.init();
  }

  ngOnInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }

}
