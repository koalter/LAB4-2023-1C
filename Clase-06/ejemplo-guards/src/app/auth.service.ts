import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logueado: boolean = false;

  constructor() { }

  CheckLog() {
    console.log(this.logueado ? 'Estas logueado' : 'No estás logueado');    
  }
}
