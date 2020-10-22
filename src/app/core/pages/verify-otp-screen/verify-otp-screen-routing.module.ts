import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyOtpScreenPage } from './verify-otp-screen.page';

const routes: Routes = [
  {
    path: '',
    component: VerifyOtpScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifyOtpScreenPageRoutingModule {}
