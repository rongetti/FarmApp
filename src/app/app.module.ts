import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';

import { SidenavService } from './sidenav.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HerdModule } from './herd/herd.module';
import { SettingsModule } from './settings/settings.module';

import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    CoreModule,
    DashboardModule,
    HerdModule,
    SettingsModule
  ],
  declarations: [
    AppComponent,
    SidenavComponent
  ],
  providers: [SidenavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
