import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
segment1:boolean=true;
segment2:boolean=false;


  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  back(){// Redirecionamento para a pagina feed
    this.navCtrl.navigateRoot('/feed'); 
  }

  segmentChanged(event){
    var segment = event.target.value;
    if(segment == "segment1"){
      this.segment1 = true;
      this.segment2 = false;
    }

    else if(segment == "segment2"){
      this.segment1 = false;
      this.segment2 = true;
    }
  }
}
