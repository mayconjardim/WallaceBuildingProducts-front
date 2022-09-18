import { OrderService } from './../../../services/orders.service';
import { Component, OnInit } from '@angular/core';
import { faUserPen, faUserMinus } from '@fortawesome/free-solid-svg-icons';
import { Observable, filter } from 'rxjs';
import { Orders } from 'src/app/private/models/Orders';
@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
})
export class OrdersListComponent implements OnInit {
  faUserPen = faUserPen;
  faUserMinus = faUserMinus;
  searchValue?: string;

  orders: Observable<Orders[]>;

  constructor(private service: OrderService) {
    this.orders = this.service.findAll();
  }

  ngOnInit(): void {}

  returnStatus(status: any): string {
    if (status == '0') {
      return 'OPEN';
    } else if (status == '1') {
      return 'PROCESSING';
    } else {
      return 'DISPATCHED';
    }
  }

  returnPriority(priority: any): string {
    if (priority == '0') {
      return 'LOW';
    } else if (priority == '1') {
      return 'MEDIUM';
    } else {
      return 'HIGH';
    }
  }
}
