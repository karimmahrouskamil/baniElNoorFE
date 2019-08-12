import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'classes'
})
export class ClassesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
