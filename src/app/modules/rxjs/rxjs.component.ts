import { Component } from '@angular/core';

import { ROUTES_RXJS } from './models/consts/route.const';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss'],
})
export class RxjsComponent {
  /** Пункты меню */
  public readonly menuItems = ROUTES_RXJS;
}
