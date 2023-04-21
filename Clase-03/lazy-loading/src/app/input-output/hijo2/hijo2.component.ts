import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styleUrls: ['./hijo2.component.css']
})
export class Hijo2Component {
  
  @Output() onEnviarDato = new EventEmitter<string>();
  datoHijo = "Dato hijo 2";
  
  enviarDato() {
    this.onEnviarDato.emit(this.datoHijo);
  }
}
