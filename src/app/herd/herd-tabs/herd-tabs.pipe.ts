import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTabs',
  pure: false
})
export class HerdTabsPipe implements PipeTransform {

  transform(items: any[], filter: Object): any {
    return items.filter(item => item.show !== false);
  }

}
