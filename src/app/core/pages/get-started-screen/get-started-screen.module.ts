import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetStartedScreenPageRoutingModule } from './get-started-screen-routing.module';

import { GetStartedScreenPage } from './get-started-screen.page';
import { StepComponent } from './step/step.component';
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
    GetStartedScreenPageRoutingModule
  ],
  declarations: [GetStartedScreenPage, StepComponent]
})
export class GetStartedScreenPageModule {}
