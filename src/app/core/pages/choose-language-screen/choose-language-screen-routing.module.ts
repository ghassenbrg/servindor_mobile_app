import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseLanguageScreenPage } from './choose-language-screen.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseLanguageScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseLanguageScreenPageRoutingModule {}
