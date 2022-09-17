import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DispatcherService } from 'src/app/private/services/dispatcher.service';
import { Dispatcher } from 'src/app/private/models/Dispatcher';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dispatcher-create',
  templateUrl: './dispatcher-create.component.html',
  styleUrls: ['./dispatcher-create.component.scss'],
})
export class DispatcherCreateComponent implements OnInit {
  dispatcher: Dispatcher = {
    id: '',
    name: '',
    profiles: [],
  };

  name: FormControl = new FormControl(null, Validators.minLength(3));

  constructor(
    private service: DispatcherService,
    private toast: ToastrService,
    private route: Router
  ) {}

  ngOnInit(): void {}

  validForm(): boolean {
    return this.name.valid;
  }

  create(): void {
    this.service.create(this.dispatcher).subscribe(
      (response) => {
        this.toast.success('Dispatcher created successfully');
        this.route.navigate(['dispatchers']);
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
}
