import { LoginPage } from './../login/login.page';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //login = LoginPage;

  constructor(public navCtrl: NavController) {}

  openLogin(){
    this.navCtrl.navigateRoot('/login');
  }

  openExplore(){

  }

  openSingUp(){
    this.navCtrl.navigateRoot('/register');
  }
}
