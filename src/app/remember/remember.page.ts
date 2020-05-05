import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-remember',
  templateUrl: './remember.page.html',
  styleUrls: ['./remember.page.scss'],
})
export class RememberPage implements OnInit {

  constructor(public navCtrl: NavController, public alertController: AlertController, public emailComposer: EmailComposer) { }

  ngOnInit() {
  }

  OpenEmailComposer(){
     this.emailComposer.open({
      to: 'ribeiro.caboclo@gmail.com',
      cc: 'erika@mustermann.de',
      bcc: ['john@doe.com', 'jane@doe.com'],
      subject: 'Cordova Icons',
      body: 'How are you? Nice greetings from Leipzig',
    }) 
  }  

  backLogin(){
    this.navCtrl.navigateRoot('/login');
  }

  async Alert() {
    const alert = await this.alertController.create({
      header: 'Enviando e-mail',
      message: 'Verifique sua caixa de e-mail para redefinir sua senha!',
      buttons: [{
        text: 'OK', 
        handler: (blah) =>{
          this.OpenEmailComposer();
        }}],
    });

    await alert.present();
  }
  
}
