import { Component, OnInit } from '@angular/core';

import { Camera, CameraOptions}  from '@ionic-native/camera/ngx';
import { AlertController, NavController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';

import { ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  public photo: string = ""; // foto
  public viewButton = false;

  animal_name = "Pipoca";
  animal_image = "../../assets/imgs/pipoca.png";
  animal_text = "Oi, meu nome é Pipoca e estou a procura de um lar.Fui encontrado próximo a rodoviária após ter sido abandonado.";

  items = [this.animal_name, this.animal_image, this.animal_text];

  constructor(
    private camera: Camera, 
    public alertController: AlertController, 
    public navCtrl: NavController,
    public actionSheetController: ActionSheetController
    ){ this.addMoreItems();}


  // Permite que o usuario tire uma foto utilizando a camera do dispositivo
  // Sendo acionada dependendo da escolha do usuario na ActionSheet
  takePicture(){
    this.photo = "";

    const options: CameraOptions = {
      quality: 100, 
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
    }

    this.camera.getPicture(options).then((imageData) =>{
      let base65image = 'data:image/jpeg;base64,' + imageData;
      this.photo = base65image;
    
    }, (error) => {
      console.log(error);
    })

    .catch((error) => {
      console.log(error);
    })
  }

   //Permitie que o usuario escolha uma foto da galeria/arquivos do dispositivos.
   // Sendo acionada dependendo da escolha do usuario na ActionSheet
  getImage(){
    this.photo = "";

    const options: CameraOptions = {
      quality: 100, 
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit: true,
    }

    this.camera.getPicture(options).then((imageData) =>{
      let base65image = 'data: image/jpeg;base64,' + imageData;
      this.photo = base65image;

    }, (error) => {
      console.log(error);
    })

    .catch((error) => {
      console.log(error);
    })
  }

  //Solicita ao usuario a seleção de como a imagem deve ser escolhida.
  // Sendo possivel a escolha através do getImage e do takePicture
  async ActionSheet() { 
    const actionSheet = await this.actionSheetController.create({
      header: 'Adicionar imagem',
      buttons: [{
        text: 'Tirar foto',
        //role: 'destructive',
        icon: 'camera-outline',
        handler: () => {
          console.log(this.camera);
          this.takePicture();
        }
      }, {
        text: 'Enviar da Galeria',
        icon: 'image-outline',
        handler: () => {
          console.log(this.camera);
          this.getImage();
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  ngOnInit() {
  }

  backSplash(){// Redirecionamento para a pagina Home
    this.navCtrl.navigateRoot('/home'); 
  }

  //Mantem o scroll da pagina sempre disponivel, carregando sempre um novo conteudo quando o usuario chega ao final da pagina
   // Para essa função é usado o array items, que vai conter a informação a ser carregada na tela, sempre de 10 em 10 items
  loadData(event){this.viewButton = true;
    setTimeout(() => {
      console.log('Concluido');     
      this.addMoreItems();     
      event.target.complete();
    }, 500);
  }

  // Esta função é acionada tanto no construtor quanto pela loadData, para que possa alimentar a pagina feed
  addMoreItems(){
    for(let i=1; i<10; i++)
    this.items.push(this.animal_name, this.animal_image, this.animal_text);  
  }

  //Executa o refresh da tela buscando novas atualizações (cards de animais) e disponibiliza ao usuario
  doRefresh(event) {
    console.log('Operação iniciada');

    setTimeout(() => {
      this.items.push('aaa')

      console.log('Pagina atualizada');
      event.target.complete();
    }, 1000);
  }
} 
