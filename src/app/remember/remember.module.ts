import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RememberPageRoutingModule } from './remember-routing.module';

import { RememberPage } from './remember.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RememberPageRoutingModule
  ],
  declarations: [RememberPage]
})
export class RememberPageModule {}
