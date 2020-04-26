import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-remember',
  templateUrl: './remember.page.html',
  styleUrls: ['./remember.page.scss'],
})
export class RememberPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  backLogin(){
    this.navCtrl.navigateRoot('/login');
  }
}
