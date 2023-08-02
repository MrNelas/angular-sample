import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JavascriptSampleComponent } from './components/javascript-sample/javascript-sample.component';
import { JavascriptComponent } from './javascript.component';

/** Маршруты модуля Javascript */
const routes: Routes = [
  {
    path: 'section',
    component: JavascriptComponent,
    children: [
      {
        path: 'javascript',
        canActivate: [],
        component: JavascriptSampleComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: `section/javascript`,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JavascriptRoutingModule {}
