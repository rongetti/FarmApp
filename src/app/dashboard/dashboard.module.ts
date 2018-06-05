import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { ChartModule } from 'angular2-chartjs';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardToolbarComponent } from './dashboard-toolbar/dashboard-toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    ChartModule,
    MaterialModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent, DashboardToolbarComponent]
})
export class DashboardModule { }
