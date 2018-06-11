import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';
import { OverlayContainer } from '@angular/cdk/overlay';

import { DataService } from './core/data.service';
import { LocalStorageService } from './core/local-storage.service';
import { SidenavService } from './sidenav.service';
import { SettingsService } from './core/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @HostBinding('class') componentCssClass;
  @ViewChild('sidenav') public sidenav: MatSidenav;

  public setThemeEvent$;

  constructor(
    private router: Router,
    private data: DataService,
    private localStorageService: LocalStorageService,
    private settingsService: SettingsService,
    private overlayContainer: OverlayContainer,
    private sidenavService: SidenavService,
  ) {  }

  ngOnInit() {
    this.sidenavService.setSidenav(this.sidenav);
    this.setThemeEvent$ = this.settingsService.setThemeEvent$.subscribe(theme => this.setTheme(theme));

    this.localStorageService.init();

    this.data.initDatabase().then(() => {
      setTimeout(() => {
        if (this.router.url === '/splash') {
          this.router.navigate(['/dashboard']);
        }
      } , 5000);
    });
  }

  public setTheme(theme) {
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
  }

  public openedStart() {
    this.sidenavService.openedStart();
  }

  public closedStart() {
    this.sidenavService.closedStart();
  }

}
