import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-ong',
  templateUrl: './register-ong.page.html',
  styleUrls: ['./register-ong.page.scss'],
})
export class RegisterOngPage implements OnInit {

  constructor() { }
  
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  ngOnInit() {
  }

}
