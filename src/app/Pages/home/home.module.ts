import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    MaterialModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])

  ],
  declarations: [HomePage]
})
export class HomePageModule {}
