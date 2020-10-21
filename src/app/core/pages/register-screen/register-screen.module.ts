import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterScreenPageRoutingModule } from './register-screen-routing.module';

import { RegisterScreenPage } from './register-screen.page';
import { CoreModule } from '../../core.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../../services/i18n/httpLoaderFactory';
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
    ReactiveFormsModule,
    IonicModule,
    CoreModule,
    RegisterScreenPageRoutingModule
  ],
  declarations: [RegisterScreenPage]
})
export class RegisterScreenPageModule {}
