import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { PersonasService } from './personas.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ServiciosRoutingModule
  ],
  providers: [
    PersonasService
  ]
})
export class ServiciosModule { }
