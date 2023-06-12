import { Component } from '@angular/core';

/** Пользователь */
interface User {
  id: number;
  name: string;
  email: string;
}

/** Админ */
interface Admin extends User {
  role: string;
}

type CurrencySign = '₽' | '€' | '£';

const currencySigns: ReadonlyArray<CurrencySign> = ['₽', '€', '£'];

type PaymentInfo<T> = {
  // T — параметр дженерика
  id: string;
  amount: number;
  currency: T; // «настраиваем» тип поля currency
};

interface PaymentInfoInter<T> {
  id: string;
  amount: number;
  currency: T;
}

@Component({
  selector: 'app-ts-gen-sample',
  templateUrl: './ts-gen-sample.component.html',
  styleUrls: ['./ts-gen-sample.component.scss'],
})
export class TsGenSampleComponent {
  users: User[] = [];

  myVespa = new Vespa();
  myTruck = new Truck();
  car = new Car();

  addUser() {
    const user: User = {
      id: this.users.length + 1,
      name: `User ${this.users.length + 1}`,
      email: `user${this.users.length + 1}@example.com`,
    };

    this.users.push(user);
  }

  identity<T>(arg: T): T {
    return arg;
  }

  washCar<T extends Car>(car: T): T {
    console.log(`Received a ${car.label} in the car wash.`);
    console.log(`Cleaning all ${car.numWheels} tires.`);
    console.log('Beeping horn -', car.horn());
    console.log('Returning your car now');
    return car;
  }

  getCar() {
    this.car = this.washCar<Car>(this.myVespa);
  }

  getVespa() {
    this.car = this.washCar<Vespa>(this.myVespa);
  }

  getTruck() {
    this.car = this.washCar<Truck>(this.myTruck);
  }
}

class Car {
  label: string = 'Generic Car';
  numWheels: Number = 4;
  horn() {
    return 'beep beep!';
  }
}

class Truck extends Car {
  override label = 'Truck';
  override numWheels = 18;
}

class Vespa extends Car {
  override label = 'Vespa';
  override numWheels = 2;
}
