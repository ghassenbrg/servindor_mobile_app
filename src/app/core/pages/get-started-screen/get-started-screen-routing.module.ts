import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetStartedScreenPage } from './get-started-screen.page';

const routes: Routes = [
  {
    path: '',
    component: GetStartedScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetStartedScreenPageRoutingModule {}
