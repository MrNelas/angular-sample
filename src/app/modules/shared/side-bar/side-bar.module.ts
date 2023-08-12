import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  declarations: [SideBarComponent],
  imports: [CommonModule, RouterModule, NgbModule],
  exports: [SideBarComponent],
})
export class SideBarModule {}
