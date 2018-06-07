import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

import { BackdropComponent } from './backdrop/backdrop.component';
import { DateFromStringPipe } from './date-from-string.pipe';
import { LoaderComponent } from './loader/loader.component';
import { SelectDialogComponent } from './select-dialog/select-dialog.component';
import { SearchListComponent } from './search-list/search-list.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    BackdropComponent,
    DateFromStringPipe,
    LoaderComponent,
    SelectDialogComponent,
    SearchListComponent
  ],
  entryComponents: [
    SelectDialogComponent
  ],
  declarations: [
    BackdropComponent,
    DateFromStringPipe,
    LoaderComponent,
    SelectDialogComponent,
    SearchListComponent
  ]
})
export class SharedModule { }
