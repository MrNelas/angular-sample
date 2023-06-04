import { Component } from '@angular/core';

import { ROUTES_APP } from './models/consts/route.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular Sample';

  menuItems = ROUTES_APP;
}
