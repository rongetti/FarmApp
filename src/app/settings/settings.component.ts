import { Component, HostBinding, OnInit } from '@angular/core';

import { SettingsService } from '../core/settings.service';

@Component({
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  @HostBinding('class') componentCssClass;

  public selectedTheme: string;

  public themes = [
    {cssClass: 'farm-app-theme', name: 'Light theme'},
    {cssClass: 'farm-app-dark-theme', name: 'Dark theme'}
  ];

  constructor(
    private settingsService: SettingsService
  ) { }

  ngOnInit() {
    this.selectedTheme = this.settingsService.settings['theme'];
  }

  public setTheme($event) {
    this.settingsService.setTheme($event.value);
    this.settingsService.updateSettings('theme', $event.value);
  }

}
