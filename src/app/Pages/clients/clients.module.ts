import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { ClientsPage } from "./clients.page";
import { MaterialModule } from "../../Material-design-modules/material.module";

const routes: Routes = [
  {
    path: "",
    component: ClientsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MaterialModule
  ],
  declarations: [ClientsPage],
  exports: [MaterialModule]
})
export class ClientsPageModule {}
