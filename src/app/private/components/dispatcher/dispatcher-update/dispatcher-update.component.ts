import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DispatcherService } from 'src/app/private/services/dispatcher.service';
import { Dispatcher } from 'src/app/private/models/Dispatcher';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dispatcher-update',
  templateUrl: './dispatcher-update.component.html',
  styleUrls: ['./dispatcher-update.component.scss'],
})
export class DispatcherUpdateComponent implements OnInit {
  dispatcher: Dispatcher = {
    id: '',
    name: '',
    profiles: [],
  };

  name: FormControl = new FormControl(null, Validators.minLength(3));
  email: FormControl = new FormControl(null, Validators.email);
  phoneNumber: FormControl = new FormControl(null, Validators.required);

  constructor(
    private service: DispatcherService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.dispatcher.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.dispatcher.id).subscribe((response) => {
      this.dispatcher = response;
    });
  }

  update(): void {
    this.service.update(this.dispatcher).subscribe(
      (response) => {
        this.toast.success('Dispatcher updated successfully');
        this.router.navigate(['dispatchers']);
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
