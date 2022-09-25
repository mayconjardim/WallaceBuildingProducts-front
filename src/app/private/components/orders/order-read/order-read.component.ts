import { Orders } from 'src/app/private/models/Orders';
import { OrderService } from './../../../services/orders.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-read',
  templateUrl: './order-read.component.html',
  styleUrls: ['./order-read.component.scss'],
})
export class OrderReadComponent implements OnInit {
  order: Orders = {
    priority: '',
    status: '',
    headline: '',
    description: '',
    manager: '',
    dispatcher: '',
    nameManager: '',
    nameDispatcher: '',
    clientZip: '',
    clientCity: '',
    clientAddress: '',
    clientName: '',
    products: [],
  };

  constructor(
    private orderService: OrderService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.order.id = this.router.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.orderService.findById(this.order.id).subscribe((response) => {
      this.order = response;
    });
  }

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
