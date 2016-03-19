import { Component, ViewEncapsulation }       from 'angular2/core';
import { RouteConfig } from 'angular2/router';

import { HeroService }     from './hero.service';

import { HeaderComponent } from './header.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
@Component({
  selector: 'app',
  template: `
    <header></header>
    <router-outlet></router-outlet>
  `,
  styles: [
    require('./styles.scss')
  ],
  directives: [
    HeaderComponent
  ],
  encapsulation: ViewEncapsulation.None,
  providers: [
    HeroService
  ]
})
@RouteConfig([
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/detail/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
  }
])
export class AppComponent {
}
