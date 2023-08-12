import { Component } from '@angular/core';

import { ROUTES_ANGULAR } from './models/consts/route.const';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss'],
})
export class AngularComponent {
  /** Заголовок */
  public readonly title: string = 'Angular';

  /** Пункты меню */
  public readonly menuItems = ROUTES_ANGULAR;
}
