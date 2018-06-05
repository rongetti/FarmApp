import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

import { BackdropComponent } from './backdrop/backdrop.component';
import { DateFromStringPipe } from './date-from-string.pipe';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    BackdropComponent,
    DateFromStringPipe,
    LoaderComponent
  ],
  declarations: [
    BackdropComponent,
    DateFromStringPipe,
    LoaderComponent
  ]
})
export class SharedModule { }
