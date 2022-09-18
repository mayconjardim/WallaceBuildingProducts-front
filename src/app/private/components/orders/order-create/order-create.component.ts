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

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.scss'],
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
  };

  managers: Manager[] = [];
  dispatchers: Dispatcher[] = [];

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
    private toast: ToastrService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.findAllManagers();
    this.findAllDispatchers();
  }

  create(): void {
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
}
