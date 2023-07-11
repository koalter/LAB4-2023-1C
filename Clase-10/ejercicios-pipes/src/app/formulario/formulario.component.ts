import { Component, EventEmitter, Output, inject } from '@angular/core';

import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Output() onSubmit = new EventEmitter<any>();
  private fb = inject(FormBuilder);
  formulario = this.fb.group({
    upperCasePipe: null,
    lowerCasePipe: null,
    dia: null,
    mes: null,
    anio: null,
    currencyPipe: null,
    decimalPipe: null,
    percentPipe: null
  });

  enviarDatos(): void {
    if (this.formulario.value) {
      const date = new Date();
      date.setDate(this.formulario.get('dia')?.value!);
      date.setMonth(this.formulario.get('mes')?.value!);
      date.setFullYear(this.formulario.get('anio')?.value!);
      
      this.onSubmit.emit({
        upperCase: this.formulario.value.upperCasePipe,
        lowerCase: this.formulario.value.lowerCasePipe,
        date: date,
        currency: this.formulario.value.currencyPipe,
        decimal: this.formulario.value.decimalPipe,
        percent: this.formulario.value.percentPipe
      });
    }

  }
}
