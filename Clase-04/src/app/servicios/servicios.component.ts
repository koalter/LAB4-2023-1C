import { Component } from '@angular/core';
import { PersonasService } from './personas.service';
import { Persona } from './persona.model';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {

  constructor(private personasService: PersonasService) { }

  traerPersonas(): Persona[] { 
    const personas = this.personasService.traerPersonas();
    console.log(personas);
    return personas;
  }
}
