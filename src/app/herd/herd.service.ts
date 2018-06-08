import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as moment from 'moment';

import { DataService } from '../core/data.service';
import { SettingsService } from '../core/settings.service';

@Injectable()
export class HerdService {

  constructor(
    private data: DataService,
    private settingsService: SettingsService
  ) {
    this.getSettings();
  }

  public animalTabs = [
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
      options: {filterBy: null, filter: null, sort: function (a, b) {
        let dateA;
        let dateB;
        if (a['boughtDate'] !== null) {
          dateA = moment(a['boughtDate'], 'DD/MM/YYYY');
        } else {
          dateA = moment(a['dob'], 'DD/MM/YYYY');
        }
        if (b['boughtDate'] !== null) {
          dateB = moment(b['boughtDate'], 'DD/MM/YYYY');
        } else {
          dateB = moment(b['dob'], 'DD/MM/YYYY');
        }
        if (dateA < dateB) {
          return -1;
        } else if (dateA > dateB) {
          return 1;
        } else {
          return 0;
        }
      }},
      show: true
    }
  ];

  public currentSelection = [];

  private selectAll = new Subject<void>();
  public selectAll$ = this.selectAll.asObservable();

  private deselectAll = new Subject<void>();
  public deselectAll$ = this.deselectAll.asObservable();

  private selectedNo = new Subject<number>();
  public selectedNo$ = this.selectedNo.asObservable();

  private searchInHerd = new Subject<string>();
  public searchInHerd$ = this.searchInHerd.asObservable();

  private getSettings() {
    let tabs = this.settingsService.settings['animalTabs'];
    for (let tab of tabs) {
      let i = this.animalTabs.findIndex(item => {
        return item['title'] === tab['title'];
      });
      this.animalTabs[i]['show'] = tab['show'];
    }
  }

  public getAnimals(tab?) {
    let items;
    let filterBy = null;
    let filter = null;
    let sort = null;
    if (tab) {
      items = this.animalTabs.filter(item => item.link === tab);
      filterBy = items[0].options.filterBy;
      filter = items[0].options.filter;
      if (items[0].options.hasOwnProperty('sort')) {
        sort = items[0].options.sort;
      }
    }
    return this.data.getAnimals(filterBy, filter, sort);
  }

  public getAnimalByTag(tag) {
    return this.data.getAnimalByTag(tag);
  }

  public addAnimal(animal) {
    return this.data.addAnimals([animal]);
  }

  public updateAnimal(animal) {
    return this.data.updateAnimal(animal);
  }

  public deleteAnimal(tag) {
    return this.data.deleteAnimal(tag);
  }

  public listSelectAll() {
    this.selectAll.next();
  }

  public listDeselectAll() {
    this.deselectAll.next();
  }

  public setSelectedNo() {
    this.selectedNo.next(this.currentSelection.length);
  }

  public searchInList(value) {
    this.searchInHerd.next(value);
  }

  public updateTabSettings(name, source) {
    this[name] = source;
    let settings = [];
    for (let item of source) {
      let toSave = {title: item['title'], show: item['show']};
      settings.push(toSave);
    }
    this.settingsService.updateSettings(name, settings);
  }

  public getGroups(name?) {
    return this.data.getGroups(name);
  }

  public createGroup(group) {
    return this.data.createGroup(group);
  }

  public updateGroup(group) {
    return this.data.updateGroup(group);
  }

  public deleteGroup(group) {
    return this.data.deleteGroup(group);
  }

}
