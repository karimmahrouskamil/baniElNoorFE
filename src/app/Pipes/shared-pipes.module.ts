import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassesPipe } from './Classes/classes.pipe';

@NgModule({
  declarations: [ClassesPipe],
  imports: [
    CommonModule
  ],
  exports:[ClassesPipe]
})
export class SharedPipesModule { }
