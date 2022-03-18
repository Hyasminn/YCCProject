import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NasiPage } from './nasi.page';

const routes: Routes = [
  {
    path: '',
    component: NasiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NasiPageRoutingModule {}
