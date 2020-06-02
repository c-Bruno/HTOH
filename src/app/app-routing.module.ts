import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'register-user', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)},
  { path: 'about', loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)},
  { path: 'register-user', loadChildren: () => import('./register-user/register-user.module').then( m => m.RegisterUserPageModule)},
  { path: 'register-ong', loadChildren: () => import('./register-ong/register-ong.module').then( m => m.RegisterOngPageModule)},




  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
