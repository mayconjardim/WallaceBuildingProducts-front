import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/private/services/manager.service';
import { Manager } from 'src/app/private/models/Manager';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manager-update',
  templateUrl: './manager-update.component.html',
  styleUrls: ['./manager-update.component.scss'],
})
export class ManagerUpdateComponent implements OnInit {
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
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.manager.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.manager.id).subscribe((response) => {
      this.manager = response;
    });
  }

  update(): void {
    this.service.update(this.manager).subscribe(
      (response) => {
        this.toast.success('Manager updated successfully');
        this.router.navigate(['managers']);
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

  validForm(): boolean {
    return this.name.valid && this.email.valid && this.phoneNumber.valid;
  }
}
