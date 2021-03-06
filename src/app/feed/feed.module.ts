import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedPageRoutingModule } from './feed-routing.module';

import { FeedPage } from './feed.page';
import { Camera, CameraOptions}  from '@ionic-native/camera/ngx';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedPageRoutingModule,
    FontAwesomeModule
  ],
  declarations: [FeedPage]
})
export class FeedPageModule {}
