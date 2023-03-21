import { Component,Input } from '@angular/core';
import { Route } from 'src/app/models/Route';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent {
  @Input() routeInput:Route;
  constructor(){
    this.routeInput = {} as Route;
  }
}
