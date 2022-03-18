import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'description',
    loadChildren: () => import('./description/description.module').then( m => m.DescriptionPageModule)
  },
  {
    path: 'recipes',
    loadChildren: () => import('./recipes/recipes.module').then( m => m.RecipesPageModule)
  },
  {
    
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  },
  {
    
    path: 'book-class',
    loadChildren: () => import('./book-class/book-class.module').then( m => m.BookClassPageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'view-booking',
    loadChildren: () => import('./view-booking/view-booking.module').then( m => m.ViewBookingPageModule)
  },
  {
    
    path: 'nasi',
    loadChildren: () => import('./nasi/nasi.module').then( m => m.NasiPageModule)
  },
  {

    path: 'lemak',
    loadChildren: () => import('./lemak/lemak.module').then( m => m.LemakPageModule)
  },
  {
    path: 'satay',
    loadChildren: () => import('./satay/satay.module').then( m => m.SatayPageModule)
  },
  {
    path: 'edit-booking/:id',
    loadChildren: () => import('./edit-booking/edit-booking.module').then( m => m.EditBookingPageModule)
  },
  {
    path: 'laksa',
    loadChildren: () => import('./laksa/laksa.module').then( m => m.LaksaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
