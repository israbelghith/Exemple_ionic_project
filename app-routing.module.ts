import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'list-livre',
    pathMatch: 'full'
  },
  {
    path: 'list-livre',
    loadChildren: () => import('./list-livre/list-livre.module').then( m => m.ListLivrePageModule)
  },
  {
    path: 'ajout-livre',
    loadChildren: () => import('./ajout-livre/ajout-livre.module').then( m => m.AjoutLivrePageModule)
  },
  {
    path: 'detail-livre/:livreId',
    loadChildren: () => import('./detail-livre/detail-livre.module').then( m => m.DetailLivrePageModule)
  },
  {
    path: 'testlivre',
    loadChildren: () => import('./testlivre/testlivre.module').then( m => m.TestlivrePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
