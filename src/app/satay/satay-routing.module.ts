import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SatayPage } from './satay.page';

const routes: Routes = [
  {
    path: '',
    component: SatayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SatayPageRoutingModule {}
