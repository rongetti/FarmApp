import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalStorageService } from './local-storage.service';
import { SettingsService } from './settings.service';
import { DataService } from './data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    DataService,
    LocalStorageService,
    SettingsService
  ]
})
export class CoreModule { }
