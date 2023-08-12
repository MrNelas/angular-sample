import { Component } from '@angular/core';

import { ROUTES_TYPESCRIPT } from './models/consts/route.const';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.scss'],
})
export class TypescriptComponent {
  /** Заголовок */
  public readonly title: string = 'TypeScript';

  /** Пункты меню */
  public readonly menuItems = ROUTES_TYPESCRIPT;
}
