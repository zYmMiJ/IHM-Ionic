import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExampleModalPageRoutingModule } from './example-modal-routing.module';

import { ExampleModalPage } from './example-modal.page';
import { HomePageModule } from '../pages/home/home.module';
import { HomePage } from '../pages/home/home.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,HomePageModule,
    IonicModule,
    ExampleModalPageRoutingModule
  ],
  declarations: [ExampleModalPage],
  providers: [HomePage]
})
export class ExampleModalPageModule {}
