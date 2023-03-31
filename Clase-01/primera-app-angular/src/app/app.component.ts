import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primera-app-angular';
  entrada = '';

  cambiarTitulo(nuevoTitulo: string) : void {
    this.title = nuevoTitulo;
  }
}
