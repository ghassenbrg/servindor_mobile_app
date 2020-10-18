import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestsTabPageRoutingModule } from './requests-tab-routing.module';

import { RequestsTabPage } from './requests-tab.page';
import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestsTabPageRoutingModule
  ],
  declarations: [RequestsTabPage]
})
export class RequestsTabPageModule {}
