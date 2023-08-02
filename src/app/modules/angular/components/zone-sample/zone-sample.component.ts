import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-zone-sample',
  templateUrl: './zone-sample.component.html',
  styleUrls: ['./zone-sample.component.scss'],
})
export class ZoneSampleComponent {
  constructor(private ngZone: NgZone) {}

  withOutZone(): void {
    setTimeout(() => {
      console.log('Hello, world!');
    }, 1000);
  }

  handleClick() {
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        console.log('Hello, world!');
      }, 1000);
    });
  }

  handleClickAnother() {
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        console.log('Hello, world!');
      }, 1000);
    });
  }
}
