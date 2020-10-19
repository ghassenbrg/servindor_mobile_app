import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/services/authentication/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./core/pages/login-screen/login-screen.module').then(m => m.LoginScreenPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'get-started',
    loadChildren: () => import('./core/pages/get-started-screen/get-started-screen.module').then( m => m.GetStartedScreenPageModule)
  },
  {
    path: 'language',
    loadChildren: () => import('./core/pages/choose-language-screen/choose-language-screen.module').then( m => m.ChooseLanguageScreenPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
