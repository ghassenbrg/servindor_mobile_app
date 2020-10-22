import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyPhoneNumberScreenPage } from './verify-phone-number-screen.page';

const routes: Routes = [
  {
    path: '',
    component: VerifyPhoneNumberScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifyPhoneNumberScreenPageRoutingModule {}
