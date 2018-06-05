import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { DataService } from '../core/data.service';
import { SettingsService } from '../core/settings.service';

@Injectable()
export class HerdService {

  constructor(
    private data: DataService,
    private settingsService: SettingsService
  ) {}

  public animalTabs = this.settingsService.settings.animalTabs;

  public currentSelection = [];

  private selectAll = new Subject<void>();
  selectAll$ = this.selectAll.asObservable();

  private deselectAll = new Subject<void>();
  public deselectAll$ = this.deselectAll.asObservable();

  public getAnimals(tab?) {
    let items;
    let filterBy = null;
    let filter = null;
    let sortBy = null;
    if (tab) {
      items = this.animalTabs.filter(item => item.link === tab);
      filterBy = items[0].options.filterBy;
      filter = items[0].options.filter;
      if (items[0].options.hasOwnProperty('sortBy')) {
        sortBy = items[0].options.sortBy;
      }
    }
    return this.data.getAnimals(filterBy, filter, sortBy);
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

  public updateSettings() {
    this.settingsService.updateSettings();
  }

}
