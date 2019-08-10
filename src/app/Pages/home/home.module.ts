import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";

import { HomePage } from "./home.page";
import { TranslateModule } from "@ngx-translate/core";
import { MaterialShareModuleModule } from "src/app/material-share-module/material-share-module.module";

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
    MaterialShareModuleModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
