import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookClassPage } from './book-class.page';

const routes: Routes = [
  {
    path: '',
    component: BookClassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookClassPageRoutingModule {}
