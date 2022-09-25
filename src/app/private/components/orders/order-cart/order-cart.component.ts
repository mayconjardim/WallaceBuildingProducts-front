import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/private/services/cart.service';

@Component({
  selector: 'app-order-cart',
  templateUrl: './order-cart.component.html',
  styleUrls: ['./order-cart.component.scss'],
})
export class OrderCartComponent implements OnInit {
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}
}
