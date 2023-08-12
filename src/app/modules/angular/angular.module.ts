import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SideBarModule } from '../shared/side-bar/side-bar.module';
import { AngularRoutingModule } from './angular-routing.module';
import { AngularComponent } from './angular.component';
import { ChangeDetectionComponent } from './components/change-detection/change-detection.component';
import { FormsSampleComponent } from './components/forms-sample/forms-sample.component';
import { ZoneSampleComponent } from './components/zone-sample/zone-sample.component';

@NgModule({
  declarations: [
    AngularComponent,
    FormsSampleComponent,
    ZoneSampleComponent,
    ChangeDetectionComponent,
  ],
  imports: [CommonModule, AngularRoutingModule, FormsModule, ReactiveFormsModule, SideBarModule],
})
export class AngularModule {}
