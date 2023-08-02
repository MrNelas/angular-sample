import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { JavascriptSampleComponent } from './components/javascript-sample/javascript-sample.component';
import { JavascriptRoutingModule } from './javascript-routing.module';
import { JavascriptComponent } from './javascript.component';

@NgModule({
  declarations: [JavascriptComponent, JavascriptSampleComponent],
  imports: [CommonModule, JavascriptRoutingModule],
})
export class JavascriptModule {}
