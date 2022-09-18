import { Orders } from './../../private/models/Orders';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filtro',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(items: Orders[], orders: Orders): any {
    if (!items || !orders) {
      return items;
    }

    return items.filter((item) => item.status.indexOf(orders.status) !== -1);
  }
}
