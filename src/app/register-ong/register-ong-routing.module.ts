import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterOngPage } from './register-ong.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterOngPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterOngPageRoutingModule {}
