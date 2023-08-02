import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AngularComponent } from './angular.component';
import { ChangeDetectionComponent } from './components/change-detection/change-detection.component';
import { FormsSampleComponent } from './components/forms-sample/forms-sample.component';
import { ZoneSampleComponent } from './components/zone-sample/zone-sample.component';

/** Маршруты модуля Ангуляр */
const routes: Routes = [
  {
    path: 'section',
    component: AngularComponent,
    children: [
      {
        path: 'forms',
        canActivate: [],
        component: FormsSampleComponent,
      },
      {
        path: 'zone',
        canActivate: [],
        component: ZoneSampleComponent,
      },
      {
        path: 'change-detection',
        canActivate: [],
        component: ChangeDetectionComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: `section/forms`,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularRoutingModule {}
