import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookClassPageRoutingModule } from './book-class-routing.module';

import { BookClassPage } from './book-class.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookClassPageRoutingModule
  ],
  declarations: [BookClassPage]
})
export class BookClassPageModule {}
