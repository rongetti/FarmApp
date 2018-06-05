import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'age'
})
export class HerdAgePipe implements PipeTransform {

  transform(value: string): string {
    let birthdate = moment(value, 'DD/MM/YYYY');
    let today = moment();
    let years = today.diff(birthdate, 'years');
    let html: string = years + ' yrs ';

    html += today.subtract(years, 'years').diff(birthdate, 'months') + ' months old';

    return html;
  }

}
