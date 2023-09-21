import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SideBarModule } from '../shared/side-bar/side-bar.module';
import { HotSampleComponent } from './components/hot-sample/hot-sample.component';
import { RxjsHooSampleComponent } from './components/rxjs-hoo-sample/rxjs-hoo-sample.component';
import { RxjsSampleComponent } from './components/rxjs-sample/rxjs-sample.component';
import { RxjsRoutingModule } from './rxjs-routing.module';
import { RxjsComponent } from './rxjs.component';

@NgModule({
  declarations: [RxjsComponent, RxjsSampleComponent, RxjsHooSampleComponent, HotSampleComponent],
  imports: [CommonModule, RxjsRoutingModule, SideBarModule, FormsModule],
})
export class RxjsModule {}
