import { Component, OnInit, Input } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  templateUrl: 'app/hero-detail.component.html',
  styles: [ require('./hero-detail.component.scss') ]
})
export class HeroDetailComponent implements OnInit {
  @Input()
  public hero: Hero;

  constructor (
    private _heroService: HeroService,
    private _routeParams: RouteParams
  ) {

  }

  ngOnInit () {
    const id = +this._routeParams.get('id');
    this._heroService.getHero(id).then((hero) => {
      this.hero = hero;
    });
  }

  goBack() {
    window.history.back();
  }
}
