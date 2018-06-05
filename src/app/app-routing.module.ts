import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SidenavComponent } from './sidenav/sidenav.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: '',
    component: SidenavComponent,
    outlet: 'sidenav'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
