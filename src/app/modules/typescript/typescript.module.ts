import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TsGenSampleComponent } from './components/ts-gen-sample/ts-gen-sample.component';
import { TsUtilsSampleComponent } from './components/ts-utils-sample/ts-utils-sample.component';
import { TypescriptRoutingModule } from './typescript-routing.module';
import { TypescriptComponent } from './typescript.component';

@NgModule({
  declarations: [TypescriptComponent, TsUtilsSampleComponent, TsGenSampleComponent],
  imports: [CommonModule, TypescriptRoutingModule],
})
export class TypescriptModule {}
