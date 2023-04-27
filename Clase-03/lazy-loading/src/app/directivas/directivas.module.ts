import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivasRoutingModule } from './directivas-routing.module';
import { DirectivasComponent } from './directivas.component';


@NgModule({
  declarations: [
    DirectivasComponent
  ],
  imports: [
    CommonModule,
    DirectivasRoutingModule
  ]
})
export class DirectivasModule { }
