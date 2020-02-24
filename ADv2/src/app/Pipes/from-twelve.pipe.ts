import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fromTwelve'
})
export class FromTwelvePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
