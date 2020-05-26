import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.page.html',
  styleUrls: ['./animal.page.scss'],
})
export class AnimalPage implements OnInit {
  animal_image = "../../assets/imgs/pipoca.png";
  animal_image2 = "../../assets/imgs/pipoca2.png";
  animal_image3 = "../../assets/imgs/pipoca3.png";
  
  constructor(
    public navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  slideOpts = {
    initialSlide: 0,
    speed: 10,
    effect: "fade",
  };

  back(){// Redirecionamento para a pagina Home
    this.navCtrl.navigateRoot('/feed'); 
  }

}
