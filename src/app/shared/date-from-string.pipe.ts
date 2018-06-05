import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFromString'
})
export class DateFromStringPipe implements PipeTransform {

  transform(value: string): Date {
    let dateArray = value.split('/');
    let y = parseInt(dateArray[2], 10);
    let m = parseInt(dateArray[1], 10) - 1;
    let d = parseInt(dateArray[0], 10);
    return new Date(y, m, d);
  }

}
