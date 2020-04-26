import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-remember',
  templateUrl: './remember.page.html',
  styleUrls: ['./remember.page.scss'],
})
export class RememberPage implements OnInit {

  constructor(public navCtrl: NavController, public alertController: AlertController) { }

  ngOnInit() {
  }

  backLogin(){
    this.navCtrl.navigateRoot('/login');
  }

  async Alert() {
    const alert = await this.alertController.create({
      header: 'Enviando e-mail',
      message: 'Verifique sua caixa de e-mail para redefinir sua senha!',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
