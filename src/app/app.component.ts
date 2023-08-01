import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ROUTES_APP } from './models/consts/route.const';

/** Начальный компонент SPA */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  /** Заголовок страницы */
  public title = 'Angular Примеры';

  /** Пункты меню */
  public menuItems = ROUTES_APP;

  /** getter интервала лет в футер */
  public get getYearPeriod(): string {
    const currentYear = new Date().getFullYear();
    return currentYear === this.startYear
      ? currentYear.toString()
      : this.startYear.toString() + '-' + currentYear.toString();
  }

  /** Начальный год */
  private startYear = 2023;
}
