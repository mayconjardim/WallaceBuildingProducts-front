import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-create',
  templateUrl: './manager-create.component.html',
  styleUrls: ['./manager-create.component.scss'],
})
export class ManagerCreateComponent implements OnInit {
  name: FormControl = new FormControl(null, Validators.minLength(3));
  email: FormControl = new FormControl(null, Validators.email);
  phoneNumber: FormControl = new FormControl(null, Validators.required);

  constructor() {}

  ngOnInit(): void {}

  validForm(): boolean {
    return this.name.valid && this.email.valid && this.phoneNumber.valid;
  }
}
