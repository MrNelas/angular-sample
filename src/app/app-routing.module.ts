import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { RouteEnum } from './models/enums/route/route.enum';

/** Маршрутизация главного модуля */
const routes: Routes = [
  {
    path: '',
    canActivate: [],
    component: MainComponent,
  },

  {
    path: RouteEnum.angular,
    loadChildren: () => import('./modules/angular/angular.module').then((m) => m.AngularModule),
  },
  {
    path: RouteEnum.rxjs,
    loadChildren: () => import('./modules/rxjs/rxjs.module').then((m) => m.RxjsModule),
  },
  {
    path: RouteEnum.typescript,
    loadChildren: () =>
      import('./modules/typescript/typescript.module').then((m) => m.TypescriptModule),
  },
  {
    path: RouteEnum.javascript,
    loadChildren: () =>
      import('./modules/javascript/javascript.module').then((m) => m.JavascriptModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
