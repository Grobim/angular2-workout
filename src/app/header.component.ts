import { Component } from 'angular2/core';
import {
  ROUTER_DIRECTIVES
} from 'angular2/router';

@Component({
  selector: 'header',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Heroes']">Heroes</a>
      <a [routerLink]="['Dashboard']">Dashboard</a>
    </nav>
  `,
  styles: [
    require('./header.component.scss')
  ]
})
export class HeaderComponent {
  title = 'Tour of Heroes';
}
