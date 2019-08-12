import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { DataResolverService } from "./Services/DataResolver/data-resolver.service";
import { ClientsService } from './Services/Clients/clients.service';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    loadChildren: "./Pages/home/home.module#HomePageModule"
  },
  {
    path: "list",
    loadChildren: "./Pages/list/list.module#ListPageModule"
  },
  {
    path: "clients",
    loadChildren: "./Pages/clients/clients.module#ClientsPageModule"
  },
  {
    path: "client-details/:id",
    resolve: { special: ClientsService },
    loadChildren:
      "./Pages/client-details/client-details.module#ClientDetailsPageModule"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      enableTracing: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
