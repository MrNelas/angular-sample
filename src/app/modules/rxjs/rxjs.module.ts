import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RxjsHooSampleComponent } from './components/rxjs-hoo-sample/rxjs-hoo-sample.component';
import { RxjsSampleComponent } from './components/rxjs-sample/rxjs-sample.component';
import { RxjsRoutingModule } from './rxjs-routing.module';
import { RxjsComponent } from './rxjs.component';

@NgModule({
  declarations: [RxjsComponent, RxjsSampleComponent, RxjsHooSampleComponent],
  imports: [CommonModule, RxjsRoutingModule],
})
export class RxjsModule {}
