import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstacionesDirective } from './directivas/estaciones.directive';
import { MouseDirective } from './directivas/mouse.directive';
import { TecladoDirective } from './directivas/teclado.directive';

@NgModule({
  declarations: [
    AppComponent,
    EstacionesDirective,
    MouseDirective,
    TecladoDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
