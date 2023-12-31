import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeTabPageRoutingModule } from './home-tab-routing.module';

import { HomeTabPage } from './home-tab.page';
import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/core/services/i18n/httpLoaderFactory';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    CommonModule,
    FormsModule,
    IonicModule,
    HomeTabPageRoutingModule,
    SharedModule
  ],
  declarations: [HomeTabPage, HomeHeaderComponent]
})
export class HomeTabPageModule {}
