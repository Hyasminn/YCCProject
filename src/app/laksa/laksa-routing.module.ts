import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaksaPage } from './laksa.page';

const routes: Routes = [
  {
    path: '',
    component: LaksaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaksaPageRoutingModule {}
