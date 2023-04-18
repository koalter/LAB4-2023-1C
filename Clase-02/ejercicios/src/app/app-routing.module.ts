import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { RegistroComponent } from './registro/registro.component';

const appRoutes: Routes = [
  { path: 'bienvenido', component: BienvenidoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '',   redirectTo: '/bienvenido', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
