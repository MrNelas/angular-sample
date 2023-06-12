import { Observable, of } from 'rxjs';
import { delay, filter, map, mergeMap, switchMap, tap, toArray } from 'rxjs/operators';

import { Component } from '@angular/core';

/** RXJS */
@Component({
  selector: 'app-rxjs-sample',
  templateUrl: './rxjs-sample.component.html',
  styleUrls: ['./rxjs-sample.component.scss'],
})
export class RxjsSampleComponent {
  /** Массив с числами */
  private items: number[] = [1, 2, 3, 4, 5];

  /** Числа */
  public nums$: Observable<number[]> = of(this.items);

  /** Фильтрация */
  public filter$ = of(1, 2, 3, 4, 5).pipe(
    filter((num) => num > 3),
    toArray(),
  );

  /** Мердж мап */
  public mergeMap$ = of(1, 2, 3, 4, 5).pipe(
    mergeMap((num) => of(num, num * 2)),
    toArray(),
  );

  /** Свитч мап */
  public switchMap$ = of(1, 2, 3, 4, 5).pipe(
    switchMap((num) => of(num, num * 2).pipe(delay(1000))),
    toArray(),
  );
}
