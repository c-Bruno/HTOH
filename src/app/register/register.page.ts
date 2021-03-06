import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public navCrtl: NavController) { }

  ngOnInit() {
  }


  /* ROTAS ========================================================================================================================*/ 
  backSplash(){
    this.navCrtl.navigateRoot('/home');
  }

  registerOng(){
    this.navCrtl.navigateRoot('/register-ong');
  }

  registerUser(){
    this.navCrtl.navigateRoot('/register-user');
  }
}
