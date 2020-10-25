import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyOtpScreenPageRoutingModule } from './verify-otp-screen-routing.module';

import { VerifyOtpScreenPage } from './verify-otp-screen.page';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../../services/i18n/httpLoaderFactory';
import { HttpClient } from '@angular/common/http';
import { CountdownModule } from 'ngx-countdown';

@NgModule({
  imports: [
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    CountdownModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    VerifyOtpScreenPageRoutingModule
  ],
  declarations: [VerifyOtpScreenPage]
})
export class VerifyOtpScreenPageModule {}
