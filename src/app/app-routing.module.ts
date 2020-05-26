import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)},
  { path: 'remember', loadChildren: () => import('./remember/remember.module').then( m => m.RememberPageModule)},
  { path: 'register', loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)},
  { path: 'feed', loadChildren: () => import('./feed/feed.module').then( m => m.FeedPageModule)},
  { path: 'filters', loadChildren: () => import('./filters/filters.module').then( m => m.FiltersPageModule)},
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)},
  { path: 'animal', loadChildren: () => import('./animal/animal.module').then( m => m.AnimalPageModule)},
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
