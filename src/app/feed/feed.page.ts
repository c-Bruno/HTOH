import { Component, OnInit } from '@angular/core';

import { Camera, CameraOptions}  from '@ionic-native/camera/ngx';
import { AlertController, NavController, MenuController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';

import { ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  public photo: any = null; // foto
  public isValid:boolean=true;

  segment1:boolean=true;
  segment2:boolean=false;
  segment3:boolean=false;

  pets:boolean=true;
  ongs:boolean=false;
  wanted:boolean=false;

  perdidos:boolean= true;
  encontrados:boolean= false;

 /*Dados provisoriso =====================================================================================================================*/
  wanted_image = "../../assets/imgs/encontrados.jpg";
  animal_name = "Pipoca";
  animal_image = "../../assets/imgs/pipoca.png";
  animal_image2 = "../../assets/imgs/pipoca2.png";
  animal_image3 = "../../assets/imgs/pipoca3.png";
  animal_text = "Oi, meu nome é Pipoca e estou a procura de um lar.Fui encontrado próximo a rodoviária após ter sido abandonado...";

  items = [this.animal_name, this.animal_image, this.animal_text];


  image_user = "../../assets/imgs/usuarioLogado.jpg";
  user_name = "Alex Silva";

  /*======================================================================================================================================*/

  constructor(
    private camera: Camera, 
    public alertController: AlertController, 
    public navCtrl: NavController,
    public emailComposer: EmailComposer,
    public actionSheetController: ActionSheetController,
    public menuCtrl: MenuController,
    private sn: DomSanitizer,
    ){ this.addMoreItems();}

    slideOpts = {
      initialSlide: 0,
      speed: 10,
      effect: "fade",
    };

    ngOnInit() {
    }

    closeMenu() {
      this.menuCtrl.close();//Fecha o menu lateral
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

   /*API de envio de e-mail ==================================================================================================*/ 
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
      /*Permite que o usuario tire uma foto utilizando a camera do dispositivo
      Sendo acionada dependendo da escolha do usuario na ActionSheet */

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
        console.log(this.photo);
      
      }, (error) => {
        console.log(error);
      })

      .catch((error) => {
        console.log(error);
      })
    }

    getImage(){
      /* Permitie que o usuario escolha uma foto da galeria/arquivos do dispositivos.
      Sendo acionada dependendo da escolha do usuario na ActionSheet
      this.photo = ""; */

      const options: CameraOptions = {
        quality: 100, 
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        allowEdit: true,
      }

      this.camera.getPicture(options).then((imageData) =>{
        let base65image = this.sn.bypassSecurityTrustResourceUrl ('data: image/jpeg;base64,' + imageData); // responsavel por garantir que não vai ocorrer a injeção de scripts maliciosos no programa
        this.photo = base65image;
        console.log(base65image);

      }, (error) => {
        console.log(error);
      })

      .catch((error) => {
        console.log(error);
      })
    }

    /* Alimentadores de informação do feed ===========================================================================================*/
    
    feedPets(){
      /*reponsavel por atualizar o feed com informações dos animais*/
      this.pets= true;
      this.ongs= false;
      this.wanted= false;
      this.isValid= true;

      this.closeMenu();
    }

    feedOngs(){
       /*reponsavel por atualizar o feed com informações das ONGs*/
      this.pets= false;
      this.ongs= true;
      this.wanted= false;
      this.isValid= false;

      this.closeMenu();
    }

    feedWanted(){
      /*reponsavel por atualizar o feed com informações dos animais que foram perdidos e encontrados*/
      this.pets= false;
      this.ongs= false;
      this.wanted= true;
      this.isValid= false;

      this.closeMenu();
    }
        
    loadData(event){
    /*Mantem o scroll da pagina sempre disponivel, carregando sempre um novo conteudo quando o usuario chega ao final da pagina
    Para essa função é usado o array items, que vai conter a informação a ser carregada na tela, sempre de 10 em 10 items */
      setTimeout(() => {
        console.log('Concluido');     
        this.addMoreItems();     

        /* event.target.complete(); */
      }, 500);
    }

    addMoreItems(){
      // Esta função é acionada tanto no construtor quanto pela loadData, para que possa alimentar a pagina feed
      for(let i=1; i<6; i++)
      this.items.push(this.animal_name, this.animal_image, this.animal_text);  
    }
    
    doRefresh(event) {
      //Executa o refresh da tela buscando novas atualizações (cards de animais) e disponibiliza ao usuario
      console.log('Operação iniciada');

      setTimeout(() => {
        console.log('Pagina atualizada');

        this.image_user = "../../assets/imgs/usuarioLogado2.jpg";
        this.user_name = "Elizabete";

        this.animal_image3 = "../../assets/imgs/refresh.png";
        this.animal_text = "Sebastião é um cachorro muito amavel e docil. Um companheiro para qualquer hora";
        event.target.complete();
        /* this.addMoreItems(); */
      }, 300);
    }

    segmentChanged(event){
      var segment = event.target.value;
      if(segment == "segment1"){
        this.segment1 = true;
        this.segment2 = false;
        this.segment3 = false;

        this.image_user = "../../assets/imgs/usuarioLogado.jpg";
        this.user_name = "Alex Silva";

        this.animal_image3 = "../../assets/imgs/pipoca3.png";
        this.animal_text = "Oi, meu nome é Pipoca e estou a procura de um lar.Fui encontrado próximo a rodoviária após ter sido abandonado...";
        
        this.loadData(event);
      }
  
      else if(segment == "segment2"){
        this.segment1 = false;
        this.segment2 = true;
        this.segment3 = false;

        this.image_user = "../../assets/imgs/usuarioLogado3.jpg";
        this.user_name = "Anderson";

        this.animal_image3 = "../../assets/imgs/3.jpg";
        this.animal_text = "Nessa aba esta sendo exibido os CACHORROS para adoção";

        this.loadData(event);
      }

      else if(segment == "segment3"){
        this.segment1 = false;
        this.segment2 = false;
        this.segment3 = true;

        this.image_user = "../../assets/imgs/usuarioLogado4.jpg";
        this.user_name = "Jefferson";

        this.animal_image3 = "../../assets/imgs/pipoca2.png";
        this.animal_text = "Nessa aba esta sendo exibido os GATOS para adoção";

        this.loadData(event);
      }
    }

    segmentChangedWanted(event){
      var segment = event.target.value;
      if(segment == "perdidos"){
        this.segment1 = true;
        this.segment2 = false;
        this.segment3 = false;

        this.wanted_image = "../../assets/imgs/encontrados.jpg";        
        this.loadData(event);
      }
  
      else if(segment == "encontrados"){
        this.segment1 = false;
        this.segment2 = true;
        this.segment3 = false;

        this.wanted_image = "../../assets/imgs/encontrados2.jpg";
        this.loadData(event);
      }
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

    openAnimalInfo(){
      this.navCtrl.navigateRoot('/animal');
    }

    openAbout(){
      this.navCtrl.navigateRoot('/about')
    }
} 
