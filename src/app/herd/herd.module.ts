import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';

import { SharedModule } from '../shared/shared.module';
import { HerdRoutingModule } from './herd-routing.module';
import { HerdService } from './herd.service';
import { HerdListComponent } from './herd-list/herd-list.component';
import { HerdToolbarComponent } from './herd-toolbar/herd-toolbar.component';
import { HerdToolbarSelectionComponent } from './herd-toolbar-selection/herd-toolbar-selection.component';
import { HerdTabsComponent } from './herd-tabs/herd-tabs.component';
import { HerdTabsPipe } from './herd-tabs/herd-tabs.pipe';
import { HerdSearchComponent } from './herd-search/herd-search.component';
import { HerdAgePipe } from './herd-list/herd-age.pipe';
import { HerdFabComponent } from './herd-fab/herd-fab.component';
import { HerdAddAnimalComponent } from './herd-add-animal/herd-add-animal.component';
import { HerdEditAnimalComponent } from './herd-edit-animal/herd-edit-animal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
    HerdRoutingModule
  ],
  entryComponents: [
    HerdAddAnimalComponent,
    HerdEditAnimalComponent
  ],
  declarations: [
    HerdListComponent,
    HerdToolbarComponent,
    HerdTabsComponent,
    HerdTabsPipe,
    HerdToolbarSelectionComponent,
    HerdSearchComponent,
    HerdAgePipe,
    HerdFabComponent,
    HerdAddAnimalComponent,
    HerdEditAnimalComponent
  ],
  providers: [HerdService]
})
export class HerdModule { }
