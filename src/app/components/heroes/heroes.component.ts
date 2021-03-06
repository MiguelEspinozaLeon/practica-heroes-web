import { Component, OnInit } from '@angular/core';
import {HeroService} from 'src/app/services/hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: any = [];
  constructor(private servicioHeroes: HeroService) {
    this.heroes = servicioHeroes.getHeroes();
    
  }

  ngOnInit(): void {
  }

}
