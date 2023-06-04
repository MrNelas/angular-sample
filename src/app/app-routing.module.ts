import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsSampleComponent } from './components/forms-sample/forms-sample.component';
import { JavascriptSampleComponent } from './components/javascript-sample/javascript-sample.component';
import { MainComponent } from './components/main/main.component';
import { RxjsHooSampleComponent } from './components/rxjs-hoo-sample/rxjs-hoo-sample.component';
import { RxjsSampleComponent } from './components/rxjs-sample/rxjs-sample.component';
import { TsGenSampleComponent } from './components/ts-gen-sample/ts-gen-sample.component';
import { TsUtilsSampleComponent } from './components/ts-utils-sample/ts-utils-sample.component';
import { ZoneSampleComponent } from './components/zone-sample/zone-sample.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [],
    component: MainComponent,
  },
  {
    path: 'javascript',
    canActivate: [],
    component: JavascriptSampleComponent,
  },
  {
    path: 'forms',
    canActivate: [],
    component: FormsSampleComponent,
  },
  {
    path: 'rxjs',
    canActivate: [],
    component: RxjsSampleComponent,
  },
  {
    path: 'rxjs-hoo',
    canActivate: [],
    component: RxjsHooSampleComponent,
  },
  {
    path: 'zone',
    canActivate: [],
    component: ZoneSampleComponent,
  },
  {
    path: 'ts-utils',
    canActivate: [],
    component: TsUtilsSampleComponent,
  },
  {
    path: 'ts-gen',
    canActivate: [],
    component: TsGenSampleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
