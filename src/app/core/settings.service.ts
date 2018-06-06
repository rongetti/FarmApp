import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SettingsService {

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
    ]
  };

  private changes = new Subject<void>();
  public changes$ = this.changes.asObservable();

  constructor() {  }

  public updateSettings(name, source) { // TODO: implement array observable
    this.settings[name] = source;
    this.changes.next();
  }

}
