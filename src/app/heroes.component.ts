import { Component } from 'angular2/core';
import { Router } from 'angular2/router';

import { HeroService } from './hero.service';
import { Hero } from './hero';
import { OnInit } from 'angular2/core';

@Component({
  selector     : 'heroes',
  templateUrl  : 'app/heroes.component.html',
  styles       : [ require('./heroes.component.scss') ]
})
export class HeroesComponent implements OnInit {
  public heroes: Hero[];
  public selectedHero: Hero;

  constructor(private _heroService: HeroService, private _router: Router) {
  }

  ngOnInit () {
    this.getHeroes();
  }

  getHeroes () {
    this._heroService.getHeroes().then(heroes => {
      this.heroes = heroes;
    });
  }

  onSelect (hero : Hero) {
    this.selectedHero = hero;
  }

  gotoDetail () {
    this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }
}
