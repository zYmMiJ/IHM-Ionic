import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';

//
import { SideMenuComponent } from '../components/side-menu/side-menu.component';
import { HomePage } from '../pages/home/home.page';

@Component({ 
  selector: 'app-example-modal',
  templateUrl: './example-modal.page.html',
  styleUrls: ['./example-modal.page.scss'],
})
export class ExampleModalPage implements OnInit {

  listName : string;

  listObj : any = [];

  constructor(private storage: Storage,private modalCtrl:ModalController,private hp:HomePage) { }

  ngOnInit() { }
  
  processForm(event) {
    event.preventDefault();
  }


  handleListNameValue(event) {
    
    console.log("ListName :");
    console.log(event.target.value);
    this.listName = event.target.value;
  }

    
  confirmForm(){
    console.log("Click");
    this.storage.get('Listname').then((val) => {
      console.log('Get de la BDD :', val);
      if ( val != null ){
        var tmp:any[] = new Array();
        tmp = val;
        this.listObj = tmp;
      }else{
        this.listObj = new Array();
      }
      this.listObj.push({ name : this.listName });
      // set a key/value
      this.storage.set('Listname', this.listObj);
    });
    this.dismissModal();
  }

    removeAll(){
      this.storage.remove('Listname');
    }

    view(){
      this.storage.get('Listname').then((val) => {
        console.log('Get de la BDD :', val);
        var tmp:any[] = new Array();
        tmp = val;
        this.listObj = tmp;
      });
    }

    dismissModal() {
      this.modalCtrl.dismiss({
        'dismissed': true
      });
    }

    

}
