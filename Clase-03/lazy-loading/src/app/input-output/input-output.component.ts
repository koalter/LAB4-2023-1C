import { Component } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent {
  dato: string = "dato del padre";

  recibirDato(nuevoDato: string) {
    this.dato = nuevoDato;
  }
}
