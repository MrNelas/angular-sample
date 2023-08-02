import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TsGenSampleComponent } from './components/ts-gen-sample/ts-gen-sample.component';
import { TsUtilsSampleComponent } from './components/ts-utils-sample/ts-utils-sample.component';
import { TypescriptComponent } from './typescript.component';

/** Маршруты модуля Typescript */
const routes: Routes = [
  {
    path: 'section',
    component: TypescriptComponent,
    children: [
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
    ],
  },
  {
    path: '',
    redirectTo: `section/ts-gen`,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypescriptRoutingModule {}
