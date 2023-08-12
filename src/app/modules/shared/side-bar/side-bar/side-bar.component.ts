import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { MenuItem } from './models/types/menu-item.type';

/** Компонент меню */
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideBarComponent {
  /** Заголовок */
  @Input() public title = '';

  /** Элементы меню */
  @Input() public items: MenuItem[] = [];
}
