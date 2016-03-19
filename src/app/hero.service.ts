import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Injectable } from 'angular2/core';

@Injectable()
export class HeroService {
  getHero (id: Number) {
    return Promise.resolve(HEROES.filter(hero => hero.id === id)[0]);
  }
  getHeroes () {
    return Promise.resolve(HEROES);
  }
  getHeroesSlowly () {
    return new Promise<Hero[]>(resolve =>
      setTimeout(() => resolve(HEROES), 2000) // 2 seconds
    );
  }
}
