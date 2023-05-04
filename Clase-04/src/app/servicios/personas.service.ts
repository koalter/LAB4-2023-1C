import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor() { }

  public traerPersonas(): Persona[] {
    return [
      new Persona('Juan', 'Perez'),
      new Persona('Pedro', 'Gomez'),
      new Persona('María', 'Gonzalez'),
      new Persona('José', 'García'),
      new Persona('Pablo', 'Jimenez')
    ];
  }
}
