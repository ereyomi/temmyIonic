import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { SocialmediaPageComponent } from './pages/socialmedia-page/socialmedia-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, /* home */
  { path: 'login', component: LoginPageComponent },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'products', component: ProductsPageComponent },
  { path: 'products/:id', component: ProductsPageComponent, data: { animation: 'isLeft'} },
  {
    path: 'social',
    component: SocialmediaPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
