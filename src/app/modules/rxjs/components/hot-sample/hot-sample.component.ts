import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-hot-sample',
  templateUrl: './hot-sample.component.html',
  styleUrls: ['./hot-sample.component.scss'],
})
export class HotSampleComponent implements OnInit, OnDestroy {
  /** Результат */
  public result = {};

  /** Модель формы */
  public model: ModelType = {
    value: 0,
  };

  /** Subject уничтожения компоненты */
  private destroy$ = new Subject<void>();

  /** Внутренний сабджект */
  private subject$$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  /** Внешний наблюдатель */
  public get subject$(): Observable<number> {
    return this.subject$$.asObservable();
  }

  public ngOnInit(): void {
    console.log('init');
    this.subject$
      .pipe(
        tap((data) => {
          console.log(data);
        }),
        takeUntil(this.destroy$),
      )
      .subscribe();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /** Сеттер сабджекта */
  public setSubject(value: number): void {
    this.subject$$.next(value);
  }

  /** Отправка данных */
  onSubmit(value: number) {
    this.setSubject(value);
  }
}

/** Тип модели */
type ModelType = {
  value: number;
};
