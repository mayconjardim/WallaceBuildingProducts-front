import { ProductService } from './../../../services/product.service';
import { Orders } from 'src/app/private/models/Orders';
import { OrderService } from './../../../services/orders.service';
import { DispatcherService } from 'src/app/private/services/dispatcher.service';
import { ManagerService } from 'src/app/private/services/manager.service';
import { Dispatcher } from 'src/app/private/models/Dispatcher';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Manager } from 'src/app/private/models/Manager';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CartService } from 'src/app/private/services/cart.service';
import { Product } from 'src/app/private/models/Product';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FaStackItemSizeDirective } from '@fortawesome/angular-fontawesome';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.scss'],
  providers: [NgbModalConfig, NgbModal],
})
export class OrderCreateComponent implements OnInit {
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
    products: ([] = []),
  };

  quantity;
  page = 1;
  pageSize = 5;
  term: string;
  managers: Manager[] = [];
  dispatchers: Dispatcher[] = [];
  products: Product[] = [];
  items = this.cartService.getItems();

  priority: FormControl = new FormControl(null, [Validators.required]);
  status: FormControl = new FormControl(null, [Validators.required]);
  headline: FormControl = new FormControl(null, [Validators.required]);
  description: FormControl = new FormControl(null, [Validators.required]);
  manager: FormControl = new FormControl(null, [Validators.required]);
  dispatcher: FormControl = new FormControl(null, [Validators.required]);
  clientName: FormControl = new FormControl(null, [Validators.required]);
  address: FormControl = new FormControl(null, [Validators.required]);
  clientCity: FormControl = new FormControl(null, [Validators.required]);
  clientZip: FormControl = new FormControl(null, [Validators.required]);

  constructor(
    private orderService: OrderService,
    private managerService: ManagerService,
    private dispatcherService: DispatcherService,
    private productService: ProductService,
    private toast: ToastrService,
    private route: Router,
    private cartService: CartService,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.findAllManagers();
    this.findAllDispatchers();
    this.findAllProducts();
  }

  open(content) {
    this.modalService.open(content);
  }

  create(): void {
    this.order.products = this.items;
    this.orderService.create(this.order).subscribe(
      (response) => {
        this.toast.success('Order created successfully');
        this.route.navigate(['orders']);
      },
      (ex) => {
        if (ex.error.erros) {
          ex.error.errors.array.forEach((element) => {
            this.toast.error(element.message);
          });
        } else {
          this.toast.error(ex.error.message);
        }
      }
    );

    console.log(this.order.products);
  }

  findAllManagers(): void {
    this.managerService.findAll().subscribe((response) => {
      this.managers = response;
    });
  }

  findAllDispatchers(): void {
    this.dispatcherService.findAll().subscribe((response) => {
      this.dispatchers = response;
    });
  }

  findAllProducts(): void {
    this.productService.findAll().subscribe((response) => {
      this.products = response;
    });
  }

  validForm(): boolean {
    return (
      this.priority.valid &&
      this.status.valid &&
      this.headline.valid &&
      this.description.valid &&
      this.manager.valid &&
      this.dispatcher.valid &&
      this.clientName.valid &&
      this.address.valid &&
      this.clientCity.valid &&
      this.clientZip.valid
    );
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    console.log(this.items);
  }
}
