import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";

import { HomePage } from "./home.page";
import { TranslateModule } from "@ngx-translate/core";
import { MaterialModule } from "src/app/Material-design-modules/material.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    RouterModule.forChild([
      {
        path: "",
        component: HomePage
      }
    ]),
    MaterialModule
  ],
  declarations: [HomePage],
  exports: [MaterialModule]
})
export class HomePageModule {}
