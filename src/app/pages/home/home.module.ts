import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

// Les Modules Persos

// Les composants Persos
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';
import { TasksComponent } from '../../components/tasks/tasks.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: HomePage }])
  ],
  declarations: [HomePage,SideMenuComponent,TasksComponent],
  providers: [SideMenuComponent]
})
export class HomePageModule {}
