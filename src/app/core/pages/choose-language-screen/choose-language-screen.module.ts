import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseLanguageScreenPageRoutingModule } from './choose-language-screen-routing.module';

import { ChooseLanguageScreenPage } from './choose-language-screen.page';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpLoaderFactory } from '../../services/i18n/httpLoaderFactory';

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
    ChooseLanguageScreenPageRoutingModule
  ],
  declarations: [ChooseLanguageScreenPage]
})
export class ChooseLanguageScreenPageModule {}
