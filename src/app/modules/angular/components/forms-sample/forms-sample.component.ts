import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

/** Пример форм Ангуляра */
@Component({
  selector: 'app-forms-sample',
  templateUrl: './forms-sample.component.html',
  styleUrls: ['./forms-sample.component.scss'],
})
export class FormsSampleComponent {
  /** Модель отправки формы */
  public model: ContactForm = {
    name: '',
    email: '',
    message: '',
  };

  /** Форма обратной связи */
  public formBuilder = this._fb.group({
    name: this._fb.control(''),
    email: this._fb.control(''),
    message: this._fb.control(''),
  });

  constructor(private readonly _fb: FormBuilder) {}

  /** Отправка данных */
  onSubmit() {
    /** @TODO реализация отправки */
    console.log(this.model);
  }

  /** Обработка отправки формы */
  onSubmitBuilder() {
    if (this.formBuilder.valid) {
      /** @TODO реализация отправки */
      console.log(this.formBuilder.value);
    }
  }
}

/** Тип контактной формы */
type ContactForm = {
  /** От кого */
  name: string;

  /** почта */
  email: string;

  /** Сообщение */
  message: string;
};
