import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/private/services/manager.service';
import { Manager } from 'src/app/private/models/Manager';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manager-create',
  templateUrl: './manager-create.component.html',
  styleUrls: ['./manager-create.component.scss'],
})
export class ManagerCreateComponent implements OnInit {
  manager: Manager = {
    id: '',
    name: '',
    email: '',
    phoneNumber: '',
    profiles: [],
  };

  name: FormControl = new FormControl(null, Validators.minLength(3));
  email: FormControl = new FormControl(null, Validators.email);
  phoneNumber: FormControl = new FormControl(null, Validators.required);

  constructor(
    private service: ManagerService,
    private toast: ToastrService,
    private route: Router
  ) {}

  ngOnInit(): void {}

  validForm(): boolean {
    return this.name.valid && this.email.valid && this.phoneNumber.valid;
  }

  create(): void {
    this.service.create(this.manager).subscribe(
      (response) => {
        this.toast.success('Manager created successfully');
        this.route.navigate(['managers']);
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
