import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RxjsHooSampleComponent } from './components/rxjs-hoo-sample/rxjs-hoo-sample.component';
import { RxjsSampleComponent } from './components/rxjs-sample/rxjs-sample.component';
import { RxjsComponent } from './rxjs.component';

/** Маршруты модуля RxJs */
const routes: Routes = [
  {
    path: 'section',
    component: RxjsComponent,
    children: [
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
    ],
  },
  {
    path: '',
    redirectTo: `section/rxjs`,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RxjsRoutingModule {}
