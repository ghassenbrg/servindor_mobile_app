import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterScreenPageRoutingModule } from './register-screen-routing.module';

import { RegisterScreenPage } from './register-screen.page';
import { CoreModule } from '../../core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    IonicModule,
    RegisterScreenPageRoutingModule
  ],
  declarations: [RegisterScreenPage]
})
export class RegisterScreenPageModule {}
