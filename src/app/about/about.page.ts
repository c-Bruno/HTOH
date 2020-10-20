import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(
    public navCtrl: NavController,
  ){ }

  ngOnInit() {
  }

  backFeed(){// Redirecionamento para a pagina Home
    this.navCtrl.navigateRoot('/feed'); 
  }

}
