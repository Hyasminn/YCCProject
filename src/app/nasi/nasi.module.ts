import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NasiPageRoutingModule } from './nasi-routing.module';

import { NasiPage } from './nasi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NasiPageRoutingModule
  ],
  declarations: [NasiPage]
})
export class NasiPageModule {}
