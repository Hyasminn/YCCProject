import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SatayPageRoutingModule } from './satay-routing.module';

import { SatayPage } from './satay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SatayPageRoutingModule
  ],
  declarations: [SatayPage]
})
export class SatayPageModule {}
