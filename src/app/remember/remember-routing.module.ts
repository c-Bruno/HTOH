import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RememberPage } from './remember.page';

const routes: Routes = [
  {
    path: '',
    component: RememberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RememberPageRoutingModule {}
