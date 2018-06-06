import { Injectable } from '@angular/core';
import { SettingsService } from './settings.service';

@Injectable()
export class LocalStorageService {

  constructor(
    private settingsService: SettingsService
  ) {  }

  init() {
    this.initSettings();
  }

  private initSettings() {
    let settings = this.settingsService.settings;
    for (let record in settings) {
      if (localStorage.getItem(record) === null) {
        localStorage.setItem(record, JSON.stringify(settings[record]));
      } else {
        this.settingsService.settings[record] = JSON.parse(localStorage.getItem(record));
      }
    }
    this.settingsService.changes$.subscribe( () => this.setTo('animalTabs') );
  }

  private getFrom(record: string) {

    if (record === 'all') {

    } else {
      return JSON.parse(localStorage.getItem(record));
    }

  }

  private setTo(records) {

    if (records === 'all') {
      let settings = this.settingsService.settings;
      for (let record in settings) {
        localStorage.setItem(record, JSON.stringify(settings[record]));
      }
    } else {
      let settings = this.settingsService.settings[records];
      localStorage.setItem(records, JSON.stringify(settings));
      console.log(settings);
    }

  }

}
