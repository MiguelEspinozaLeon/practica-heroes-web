import { Injectable } from '@angular/core';
interface Heroe{
  id: number;
  nombre: string;
  
}

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }


  heroes: Heroe[]=[
    
      { id: 11, nombre: 'Dr Nice' },
      { id: 12, nombre: 'Narco' },
      { id: 13, nombre: 'Bombasto' },
      { id: 14, nombre: 'Celeritas' },
      { id: 15, nombre: 'Magneta' },
      { id: 16, nombre: 'RubberMan' },
      { id: 17, nombre: 'Dynama' },
      { id: 18, nombre: 'Dr IQ' },
      { id: 19, nombre: 'Magma' },
      { id: 20, nombre: 'Tornado' }
    ];

    getHeroes(){
      return this.heroes;
    }
  
}
