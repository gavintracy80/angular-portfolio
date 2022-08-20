import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { animation } from './route-animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    animation
  ]
})
export class AppComponent {
  title = 'portfolio';

  prepareRoute(outlet: RouterOutlet) {
    const animation = outlet.activatedRouteData['animation'] || {};
    return animation['value'] || null;
  }
}
