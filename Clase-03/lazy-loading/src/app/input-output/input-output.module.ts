import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputOutputRoutingModule } from './input-output-routing.module';
import { InputOutputComponent } from './input-output.component';
import { HijoComponent } from './hijo/hijo.component';
import { Hijo2Component } from './hijo2/hijo2.component';


@NgModule({
  declarations: [
    InputOutputComponent,
    HijoComponent,
    Hijo2Component
  ],
  imports: [
    CommonModule,
    InputOutputRoutingModule
  ]
})
export class InputOutputModule { }
