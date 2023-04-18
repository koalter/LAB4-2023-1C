import { Component } from '@angular/core';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  correo: string = '';
  nombre: string = '';
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
    const usuario = new Usuario(this.nombre, this.clave);

    if (localStorage.getItem(this.correo)) {
      console.error('El correo ingresado ya está siendo utilizado!');
    } else {
      localStorage.setItem(this.correo, JSON.stringify(usuario));
      localStorage.setItem('loggedInUser', JSON.stringify({ correo: this.correo, clave: this.clave }));
      console.log(`Usuario registrado con el correo ${this.correo}`);
      this.sesionIniciada = true;
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
