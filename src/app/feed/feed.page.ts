import { Component, OnInit } from '@angular/core';

import { Camera, CameraOptions}  from '@ionic-native/camera/ngx';
import { AlertController, NavController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';

import { ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { EmailComposer } from '@ionic-native/email-composer/ngx';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  public photo: string = ""; // foto

  animal_name = "Pipoca";
  animal_image = "../../assets/imgs/pipoca.png";
  animal_image2 = "../../assets/imgs/pipoca2.png";
  animal_image3 = "../../assets/imgs/pipoca3.png";
  animal_text = "Oi, meu nome é Pipoca e estou a procura de um lar.Fui encontrado próximo a rodoviária após ter sido abandonado...";

  items = [this.animal_name, this.animal_image, this.animal_text];

  constructor(
    private camera: Camera, 
    public alertController: AlertController, 
    public navCtrl: NavController,
    public emailComposer: EmailComposer,
    public actionSheetController: ActionSheetController
    ){ this.addMoreItems();}


    slideOpts = {
      initialSlide: 0,
      speed: 10,
      effect: "fade",
    };

    ngOnInit() {
    }
    
  
    async ActionSheet() { 
    //Solicita ao usuario a seleção de como a imagem deve ser escolhida.
    // Sendo possivel a escolha através do getImage e do takePicture
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

    OpenEmailComposer(){
      //Acionado na opção de "Fale conosco", onde sera aberto o email do usuario para nos encaminhar uma mensagem
      this.emailComposer.open({
      to: 'happyuserhelp@gmail.com',
      /* cc: 'erika@mustermann.de',
      bcc: ['john@doe.com', 'jane@doe.com'], */
      subject: 'Duvidas',
      /* body: 'How are you? Nice greetings from Leipzig', */
    }) 
  }  

    /* Adicionar nova imagem ===========================================================================================*/
    takePicture(){
      // Permite que o usuario tire uma foto utilizando a camera do dispositivo
    // Sendo acionada dependendo da escolha do usuario na ActionSheet
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

    getImage(){
      //Permitie que o usuario escolha uma foto da galeria/arquivos do dispositivos.
    // Sendo acionada dependendo da escolha do usuario na ActionSheet
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

    /* Alimentadores de informação do feed ===========================================================================================*/
    loadData(event){
      //Mantem o scroll da pagina sempre disponivel, carregando sempre um novo conteudo quando o usuario chega ao final da pagina
    // Para essa função é usado o array items, que vai conter a informação a ser carregada na tela, sempre de 10 em 10 items
      setTimeout(() => {
        console.log('Concluido');     
        this.addMoreItems();     
        event.target.complete();
      }, 500);
    }

    addMoreItems(){
      // Esta função é acionada tanto no construtor quanto pela loadData, para que possa alimentar a pagina feed
      for(let i=1; i<10; i++)
      this.items.push(this.animal_name, this.animal_image, this.animal_text);  
    }
    
    doRefresh(event) {
      //Executa o refresh da tela buscando novas atualizações (cards de animais) e disponibiliza ao usuario
      console.log('Operação iniciada');

      setTimeout(() => {
        this.items.push('aaa')

        console.log('Pagina atualizada');
        event.target.complete();
      }, 1000);
    }


  /* ROTAS ========================================================================================================================*/   
  backSplash(){// Redirecionamento para a pagina Home
      this.navCtrl.navigateRoot('/home'); 
    }

    openFilters(){
      this.navCtrl.navigateRoot('/filters');
    }

    openProfile(){
      this.navCtrl.navigateRoot('/profile');
    }
} 
