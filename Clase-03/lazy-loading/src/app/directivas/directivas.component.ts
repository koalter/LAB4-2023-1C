import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {
  listadoProductos = [
    { marca: "Samsung", stock: 100, precio: 300},
    { marca: "Motorola", stock: 100, precio: 300},
    { marca: "Huawei", stock: 100, precio: 300},
  ];

  comprar(producto: any) {
    console.info(producto);
  }
}
