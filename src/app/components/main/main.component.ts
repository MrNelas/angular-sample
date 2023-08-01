import { Component } from '@angular/core';

/** Главный компонент - стартовая страница приложения */
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  /** Заголовок страницы */
  public title = 'Дневник использования функционала Angular и Javascript';

  /** Список примеров в этом приложении
   * @TODO при необходимости перенести в const
   */
  public items: ItemMenu[] = [
    {
      title: 'Angular Forms',
      description:
        'Обработка пользовательского ввода с помощью форм является краеугольным камнем многих распространенных приложений. Приложения используют формы, позволяющие пользователям входить в систему, обновлять профиль, вводить конфиденциальную информацию и выполнять множество других задач по вводу данных. Angular предоставляет два разных подхода к обработке пользовательского ввода через формы: реактивный и управляемый шаблонами. Оба фиксируют события пользовательского ввода из представления, проверяют пользовательский ввод, создают модель формы и модель данных для обновления и предоставляют способ отслеживания изменений.',
    },
    {
      title: 'RxJS',
      description:
        'RxJS — это библиотека, реализующая принципы реактивного программирования для JavaScript. Основанная на объектах типа Observable, она упрощает написание и контроль асинхронного и событийного кода.',
    },
    {
      title: 'RxJS: Higher Order Observables',
      description:
        'Higher Order Observables — это особый тип операторов, которые в качестве значений принимают потоки.',
    },
    {
      title: 'NgZone Angular',
      description:
        'Зона — это контекст выполнения, который сохраняется для асинхронных задач. Вы можете думать об этом как локальное хранилище потока для виртуальной машины JavaScript',
    },
    {
      title: 'TypeScript Utility Types',
      description:
        'TypeScript предоставляет несколько служебных типов для облегчения преобразования распространенных типов. Эти утилиты доступны по всему миру.',
    },
    {
      title: 'TypeScript Generic',
      description:
        'Возможность создать компонент, который может работать с различными типами, а не с одним. Это позволяет пользователям потреблять эти компоненты и использовать свои собственные типы.',
    },
    { title: 'JavaScript', description: 'Различные примеры использования JavaScript' },
  ];
}

/** Тип элементов меню */
type ItemMenu = {
  /** заголовок */
  title: string;

  /** Описание */
  description: string;
};
