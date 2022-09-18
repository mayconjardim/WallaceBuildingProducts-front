import { Pipe, PipeTransform } from '@angular/core';
import { Orders } from 'src/app/private/models/Orders';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(orders: Orders[], search: string): any {
    if (orders && search)
      return orders.filter((d) => d.status.indexOf(search) > 0);
    return orders;
  }
}
