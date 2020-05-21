import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.page.html',
  styleUrls: ['./filters.page.scss'],
})
export class FiltersPage implements OnInit {

  constructor(
    public navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

   customPopoverOptions: any = {
    header: 'Cor',
    subHeader: 'Selecione a cor que deseja',
    message: 'Only select your dominant hair color'
  };

  back(){
    this.navCtrl.navigateRoot('/feed');;
  }
}
