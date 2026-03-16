import { Component, signal } from '@angular/core';
interface Persona{
  id: number;
  nombre: string;
  genero: string;
}

@Component({
  templateUrl: 'persona-page.component.html',
})

export class PersonaPageComponent{

  personas = signal<Persona[]>([
    {
      id: 1,
      nombre: 'Leydy',
      genero: 'femenino',
    },
    {
      id: 2,
      nombre: 'Noe',
      genero: 'masculino',
    },
    {
      id: 3,
      nombre: 'Rosalía',
      genero: 'femenino',
    }
  ])

}
