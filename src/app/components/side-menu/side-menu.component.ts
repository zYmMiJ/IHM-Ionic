import { Component, OnInit, NgZone } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Events, NavController } from '@ionic/angular';
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {

  listnames: any = [];

  constructor(private storage: Storage,private zone: NgZone) { }

  ngOnInit() {
    this.storage.get('Listname').then((val) => {
      console.log('Get de la BDD :', val);
      if ( val != null ){
        var tmp:any[] = new Array();
        tmp = val;
        this.listnames = val;
      }else{
        this.listnames = new Array();
      }
      console.log("SSSSSSSSSS :"+this.listnames,tmp);
      console.log("Init HomeZZZZZZZZZ :"+this.listnames[0].name,tmp);
    });
  }

  menuOpened() {
    console.log("OnOpen");
    this.storage.get('Listname').then((val) => {
      if ( val != null ){
        var tmp:any[] = new Array();
        tmp = val;
        this.listnames = val;
      }else{
        this.listnames = new Array();
      }
    });
  }

  refresh(){
    
  }

  remove(i){
    console.log('remove :'+i);
    console.log(this.listnames[i]);
    this.listnames.splice(i,1);  
    this.storage.set('Listname', this.listnames);
    
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
