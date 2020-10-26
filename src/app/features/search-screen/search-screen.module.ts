import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchScreenPageRoutingModule } from './search-screen-routing.module';

import { SearchScreenPage } from './search-screen.page';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/core/services/i18n/httpLoaderFactory';
import { HttpClient } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';

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
    SharedModule,
    SearchScreenPageRoutingModule
  ],
  declarations: [SearchScreenPage]
})
export class SearchScreenPageModule {}
