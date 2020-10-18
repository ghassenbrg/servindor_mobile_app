import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeScreenPage } from './home-screen.page';

const routes: Routes = [
  {
    path: '',
    component: HomeScreenPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home-tab/home-tab.module').then(m => m.HomeTabPageModule)
      },
      {
        path: 'favorites',
        loadChildren: () => import('./favorites-tab/favorites-tab.module').then(m => m.FavoritesTabPageModule)
      },
      {
        path: 'requests',
        loadChildren: () => import('./requests-tab/requests-tab.module').then(m => m.RequestsTabPageModule)
      },
      {
        path: 'messages',
        loadChildren: () => import('./messages-tab/messages-tab.module').then( m => m.MessagesTabPageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('./account-tab/account-tab.module').then( m => m.AccountTabPageModule)
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeScreenPageRoutingModule {}
