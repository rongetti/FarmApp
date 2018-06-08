import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SettingsService {

  private setThemeEvent = new Subject<string>();
  public setThemeEvent$ = this.setThemeEvent.asObservable();

  public settings = {
    animalTabs: [
      {
        title: 'All',
        show: true
      },
      {
        title: 'Groups',
        show: true
      },
      {
        title: 'Dairy',
        show: true
      },
      {
        title: 'Beef',
        show: true
      },
      {
        title: 'Bulls',
        show: true
      },
      {
        title: 'Calved Cows',
        show: true
      },
      {
        title: 'In Calf',
        show: true
      },
      {
        title: 'Served',
        show: true
      },
      {
        title: 'Bought In',
        show: true
      },
      {
        title: 'Born On Farm',
        show: true
      },
      {
        title: 'Moved Out',
        show: true
      },
      {
        title: 'Duration In Herd',
        show: true
      }
    ],
    theme: 'farm-app-theme'
  };

  private changes = new Subject<void>();
  public changes$ = this.changes.asObservable();

  constructor() {  }

  public initSettings() {
    setTimeout(() => {
      this.setTheme(this.settings.theme);
    }, 0);
    // this.setTheme(this.settings.theme);
  }

  public updateSettings(category, value) { // TODO: implement array observable
    this.settings[category] = value;
    this.changes.next(category);
  }

  public setTheme(theme) {
    this.setThemeEvent.next(theme);
  }

}
