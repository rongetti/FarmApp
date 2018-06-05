import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SettingsService {

  public settings = {
    animalTabs: [
      {
        title: 'All',
        link: 'all',
        options: {filterBy: null, filter: null},
        show: true
      },
      {
        title: 'Groups',
        link: 'groups',
        options: {filterBy: null, filter: null},
        show: true
      },
      {
        title: 'Dairy',
        link: 'dairy',
        options: {filterBy: 'purpose', filter: 'dairy'},
        show: true
      },
      {
        title: 'Beef',
        link: 'beef',
        options: {filterBy: 'purpose', filter: 'beef'},
        show: true
      },
      {
        title: 'Bulls',
        link: 'bulls',
        options: {filterBy: 'category', filter: 'bull'},
        show: true
      },
      {
        title: 'Calved Cows',
        link: 'calved',
        options: {filterBy: 'calved', filter: true},
        show: true
      },
      {
        title: 'In Calf',
        link: 'in-calf',
        options: {filterBy: 'inCalf', filter: true},
        show: true
      },
      {
        title: 'Served',
        link: 'served',
        options: {filterBy: 'served', filter: true},
        show: true
      },
      {
        title: 'Bought In',
        link: 'bought-in',
        options: {filterBy: 'boughtIn', filter: true},
        show: true
      },
      {
        title: 'Born On Farm',
        link: 'born-on-farm',
        options: {filterBy: 'bornOnFarm', filter: true},
        show: true
      },
      {
        title: 'Moved Out',
        link: 'moved-out',
        options: {filterBy: 'movedOut', filter: true},
        show: true
      },
      {
        title: 'Duration In Herd',
        link: 'duration-in-herd',
        options: {filterBy: 'dob', filter: {$gt: null}, sortBy: ['dob']},
        show: true
      }
    ]
  };

  private changes = new Subject<void>();
  public changes$ = this.changes.asObservable();

  constructor() {  }

  public updateSettings() { // TODO: implement array observable
    this.changes.next();
  }

}
