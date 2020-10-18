import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritesTabPageRoutingModule } from './favorites-tab-routing.module';

import { FavoritesTabPage } from './favorites-tab.page';
import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritesTabPageRoutingModule
  ],
  declarations: [FavoritesTabPage]
})
export class FavoritesTabPageModule {}
