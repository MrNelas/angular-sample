import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsSampleComponent } from './components/forms-sample/forms-sample.component';
import { JavascriptSampleComponent } from './components/javascript-sample/javascript-sample.component';
import { MainComponent } from './components/main/main.component';
import { RxjsHooSampleComponent } from './components/rxjs-hoo-sample/rxjs-hoo-sample.component';
import { RxjsSampleComponent } from './components/rxjs-sample/rxjs-sample.component';
import { TsGenSampleComponent } from './components/ts-gen-sample/ts-gen-sample.component';
import { TsUtilsSampleComponent } from './components/ts-utils-sample/ts-utils-sample.component';
import { ZoneSampleComponent } from './components/zone-sample/zone-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RxjsSampleComponent,
    RxjsHooSampleComponent,
    ZoneSampleComponent,
    FormsSampleComponent,
    TsUtilsSampleComponent,
    TsGenSampleComponent,
    JavascriptSampleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
