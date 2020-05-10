import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions}  from '@ionic-native/camera/ngx';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
photo: String = '';

  constructor(public camera: Camera, public alertController: AlertController) { }

  takePicture(){
    this.photo = '';

    const options: CameraOptions = {
      quality: 100, 
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
    }

    this.camera.getPicture(options)
    .then((imageData) =>{
      let base65image = 'data: image/jpeg;base64,' + imageData;
      this.photo = base65image;

    }, (error) => {
      console.log(error);
    })

    .catch((error) => {
      console.log(error);
    })
  }

  async Alert() {
    const alert = await this.alertController.create({
      header: 'Login inválido!',
      message: 'O usuario e/ou senha informado não foram encontrados. Cheque os campos e tente novamente',
      buttons: [{
        text: 'OK', 
        handler: (blah) =>{
          console.log(this.camera);
          this.takePicture();
        }}],
      cssClass: 'alert'
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
