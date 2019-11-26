import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ExampleModalPage } from '../../example-modal/example-modal.page';
import { Storage } from '@ionic/storage';
import { SideMenuComponent } from 'src/app/components/side-menu/side-menu.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  dataReturned:any;
  listnames: any= [];

  constructor( public modalController: ModalController,private storage: Storage,private side:SideMenuComponent) { }

  
  ngOnInit() {  }

  async openModal() {
    const modal = await this.modalController.create({
      component: ExampleModalPage,

  });

  modal.onDidDismiss().then((dataReturned) => {
    if (dataReturned !== null) {
      this.dataReturned = dataReturned.data;
      //alert('Modal Sent Data :'+ dataReturned);
    }
  });
 
    return await modal.present();
  }

  click(){
    console.log("click");
    this.side.refresh();
  }
}

//https://ionicframework.com/docs/v3/developer-resources/forms/
