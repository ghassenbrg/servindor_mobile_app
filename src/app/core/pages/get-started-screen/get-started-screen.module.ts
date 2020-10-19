import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetStartedScreenPageRoutingModule } from './get-started-screen-routing.module';

import { GetStartedScreenPage } from './get-started-screen.page';
import { StepComponent } from './step/step.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetStartedScreenPageRoutingModule
  ],
  declarations: [GetStartedScreenPage, StepComponent]
})
export class GetStartedScreenPageModule {}
