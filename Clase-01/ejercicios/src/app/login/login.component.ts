import { Component } from '@angular/core';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  nombre: string = '';
  clave: string = '';

  iniciarSesion() {
    const usuario = new Usuario(this.nombre, this.clave);
    console.log(usuario);
  }
}
