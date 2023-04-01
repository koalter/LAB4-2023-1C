import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EjercicioUnoComponent } from './ejercicio-uno/ejercicio-uno.component';
import { AppRoutingModule } from './app-routing.module';
import { BienvenidoModule } from './bienvenido/bienvenido.module';
import { LoginModule } from './login/login.module';
import { ErrorModule } from './error/error.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EjercicioUnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BienvenidoModule,
    LoginModule,
    ErrorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
