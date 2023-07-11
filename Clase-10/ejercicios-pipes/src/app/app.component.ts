import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  datos: any;
  fecha = Date.now();
  texto = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, labore nostrum quaerat molestiae cupiditate odit eligendi dolorum temporibus aut ad perspiciatis? Voluptate optio iste minima sit esse quasi at odit.';

  recuperarDatos(datos: any) {
    this.datos = datos;
  }
}
