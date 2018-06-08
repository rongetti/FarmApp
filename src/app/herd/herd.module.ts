import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { HerdRoutingModule } from './herd-routing.module';
import { HerdService } from './herd.service';
import { HerdComponent } from './herd.component';
import { HerdListComponent } from './herd-list/herd-list.component';
import { HerdToolbarComponent } from './herd-toolbar/herd-toolbar.component';
import { HerdToolbarSelectionComponent } from './herd-toolbar-selection/herd-toolbar-selection.component';
import { HerdTabsComponent } from './herd-tabs/herd-tabs.component';
import { HerdTabsPipe } from './herd-tabs/herd-tabs.pipe';
import { HerdAgePipe } from './herd-list/herd-age.pipe';
import { HerdFabComponent } from './herd-fab/herd-fab.component';
import { HerdAddAnimalComponent } from './herd-add-animal/herd-add-animal.component';
import { HerdEditAnimalComponent } from './herd-edit-animal/herd-edit-animal.component';
import { HerdGroupsComponent } from './herd-groups/herd-groups.component';
import { HerdViewGroupComponent } from './herd-view-group/herd-view-group.component';
import { HerdCreateGroupComponent } from './herd-create-group/herd-create-group.component';
import { HerdAddToGroupComponent } from './herd-add-to-group/herd-add-to-group.component';
import { HerdChooseGroupComponent } from './herd-choose-group/herd-choose-group.component';

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
    HerdEditAnimalComponent,
    HerdViewGroupComponent,
    HerdCreateGroupComponent,
    HerdAddToGroupComponent,
    HerdChooseGroupComponent
  ],
  declarations: [
    HerdComponent,
    HerdListComponent,
    HerdToolbarComponent,
    HerdTabsComponent,
    HerdTabsPipe,
    HerdToolbarSelectionComponent,
    HerdAgePipe,
    HerdFabComponent,
    HerdAddAnimalComponent,
    HerdEditAnimalComponent,
    HerdGroupsComponent,
    HerdViewGroupComponent,
    HerdCreateGroupComponent,
    HerdAddToGroupComponent,
    HerdChooseGroupComponent
  ],
  providers: [
    HerdService
  ]
})
export class HerdModule { }
