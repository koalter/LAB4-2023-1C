import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicios';
  edadUno = '';
  edadDos = '';
  edadPromedio = '';
  edadSuma = '';

  calcular() {
    let suma: number = parseInt(this.edadUno) + parseInt(this.edadDos);
    let promedio: number = suma / 2;

    this.edadSuma = suma.toString();
    this.edadPromedio = promedio.toString();
  }

  limpiar() {
    this.edadUno = '';
    this.edadDos = '';
    this.edadPromedio = '';
    this.edadSuma = '';
  }
}
