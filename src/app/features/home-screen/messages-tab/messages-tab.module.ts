import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessagesTabPageRoutingModule } from './messages-tab-routing.module';

import { MessagesTabPage } from './messages-tab.page';
import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessagesTabPageRoutingModule
  ],
  declarations: [MessagesTabPage]
})
export class MessagesTabPageModule {}
