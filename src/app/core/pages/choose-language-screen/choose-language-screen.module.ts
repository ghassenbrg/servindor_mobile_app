import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseLanguageScreenPageRoutingModule } from './choose-language-screen-routing.module';

import { ChooseLanguageScreenPage } from './choose-language-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseLanguageScreenPageRoutingModule
  ],
  declarations: [ChooseLanguageScreenPage]
})
export class ChooseLanguageScreenPageModule {}
