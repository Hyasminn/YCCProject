import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaksaPageRoutingModule } from './laksa-routing.module';

import { LaksaPage } from './laksa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaksaPageRoutingModule
  ],
  declarations: [LaksaPage]
})
export class LaksaPageModule {}
