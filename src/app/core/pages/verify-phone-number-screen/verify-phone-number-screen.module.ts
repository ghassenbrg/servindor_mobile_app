import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyPhoneNumberScreenPageRoutingModule } from './verify-phone-number-screen-routing.module';

import { VerifyPhoneNumberScreenPage } from './verify-phone-number-screen.page';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../../services/i18n/httpLoaderFactory';
import { HttpClient } from '@angular/common/http';
import { CoreModule } from '../../core.module';

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
    CoreModule,
    VerifyPhoneNumberScreenPageRoutingModule
  ],
  declarations: [VerifyPhoneNumberScreenPage]
})
export class VerifyPhoneNumberScreenPageModule {}
