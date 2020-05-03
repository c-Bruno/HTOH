import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public isValid = true;
  public viewPassword = false;
  public passText = "";

  constructor(public navCtrl: NavController, public alertController: AlertController) { }

  ngOnInit() {
  }

  backSplash(){// Redirecionamento para a pagina Home
    this.navCtrl.navigateRoot('/home'); 
  }

  rememberButton(){ // Redirecionamento para a pagina Esqueci minha senha
    this.navCtrl.navigateRoot('/remember') 
  }

  getValor(){

  }

  validate(){
    var user = String((document.getElementById('user-input') as unknown as HTMLInputElement).value);
    var pass = String((document.getElementById('pass-input') as unknown as HTMLInputElement).value);

    var userPROVISORIO = 'HTOH';
    var passPROVISORIO = '1234';

    if ((userPROVISORIO == user) && (passPROVISORIO == pass)){
      console.log(`Consegui logar com sucesso utilzando o usuario ${user} e senha ${pass}`)
    }    

    else{
      this.Alert();
      this.isValid = false;
    }
  }

  async Alert() {
    const alert = await this.alertController.create({
      header: 'Login inválido!',
      message: 'O usuario e/ou senha informado não foram encontrados. Cheque os campos e tente novamente',
      buttons: ['OK'],
      cssClass: 'alert'
    });

    await alert.present();
  }
}
