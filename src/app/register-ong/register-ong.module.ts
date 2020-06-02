import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterOngPageRoutingModule } from './register-ong-routing.module';

import { RegisterOngPage } from './register-ong.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterOngPageRoutingModule
  ],
  declarations: [RegisterOngPage]
})
export class RegisterOngPageModule {}
