import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HerdListComponent } from './herd-list/herd-list.component';

const herdRoutes: Routes = [
  {
    path: 'herd/list/groups',
    component: HerdListComponent
  },
  {
    path: 'herd/list/:tab',
    component: HerdListComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(herdRoutes) ],
  exports: [ RouterModule ]
})
export class HerdRoutingModule { }
