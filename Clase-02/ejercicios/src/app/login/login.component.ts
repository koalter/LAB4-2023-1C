import { Component } from '@angular/core';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  correo: string = '';
  clave: string = '';
  sesionIniciada: boolean = false;

  constructor() {
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (loggedInUser) {
      const { correo, clave } = JSON.parse(loggedInUser);
      const usuarioEncontrado = localStorage.getItem(correo);

      if (usuarioEncontrado && (JSON.parse(usuarioEncontrado) as Usuario).clave === clave) {
        this.sesionIniciada = true;
        this.correo = correo;
      }
    }
  }

  iniciarSesion() {
    const usuario: string | null = localStorage.getItem(this.correo);

    if (usuario && (JSON.parse(usuario) as Usuario).clave === this.clave) {
      localStorage.setItem('loggedInUser', JSON.stringify({ correo: this.correo, clave: this.clave }));
      console.log(`Sesión iniciada como usuario ${this.correo}`);
      this.sesionIniciada = true;
    } else {
      console.error('Usuario incorrecto o inexistente!');
    }
  }

  cerrarSesion() {
    localStorage.removeItem('loggedInUser');

    if (!localStorage.getItem('loggedInUser')) {
      this.sesionIniciada = false;
      console.log(`La sesión de ${this.correo} ha finalizado! Adiós!`);
    } else {
      console.error('Hubo un error al cerrar la sesión. Intente más tarde!');
    }
  }
}
