import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home-screen/home-screen.module').then(m => m.HomeScreenPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search-screen/search-screen.module').then( m => m.SearchScreenPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
