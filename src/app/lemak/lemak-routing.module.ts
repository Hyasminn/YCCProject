import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LemakPage } from './lemak.page';

const routes: Routes = [
  {
    path: '',
    component: LemakPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LemakPageRoutingModule {}
