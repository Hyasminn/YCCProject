import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LemakPageRoutingModule } from './lemak-routing.module';

import { LemakPage } from './lemak.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LemakPageRoutingModule
  ],
  declarations: [LemakPage]
})
export class LemakPageModule {}
