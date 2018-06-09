import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { OverlayContainer } from '@angular/cdk/overlay';

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
    private sidenavService: SidenavService,
    private localStorageService: LocalStorageService,
    private settingsService: SettingsService,
    public overlayContainer: OverlayContainer
  ) {
    this.localStorageService.init();
  }

  ngOnInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
    this.setThemeEvent$ = this.settingsService.setThemeEvent$.subscribe(theme => this.setTheme(theme));
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
