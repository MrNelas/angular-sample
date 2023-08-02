import { Component } from '@angular/core';

import { ROUTES_JAVASCRIPT } from './models/consts/route.const';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.scss'],
})
export class JavascriptComponent {
  /** Пункты меню */
  public readonly menuItems = ROUTES_JAVASCRIPT;
}
