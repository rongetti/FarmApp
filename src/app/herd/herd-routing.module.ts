import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HerdComponent } from './herd.component';
import { HerdListComponent } from './herd-list/herd-list.component';
import { HerdGroupsComponent } from './herd-groups/herd-groups.component';

const herdRoutes: Routes = [
  {
    path: 'herd/list',
    component: HerdComponent,
    children: [
      {
        path: 'groups',
        component: HerdGroupsComponent,
      },
      {
        path: ':tab',
        component: HerdListComponent
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(herdRoutes) ],
  exports: [ RouterModule ]
})
export class HerdRoutingModule { }
