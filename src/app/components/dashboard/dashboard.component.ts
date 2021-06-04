import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: any = [];
  constructor(private servicioHeroes: HeroService) {
    this.heroes = servicioHeroes.getHeroes();
    
  }

  ngOnInit(): void {
  }

}
