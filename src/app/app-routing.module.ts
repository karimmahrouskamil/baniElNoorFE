import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './Pages/home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './Pages/list/list.module#ListPageModule'
  },
  { path: 'clients', loadChildren: './Pages/clients/clients.module#ClientsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
