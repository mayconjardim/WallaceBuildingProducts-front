import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
import { Credentials } from 'src/app/private/models/credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  creds: Credentials = {
    name: '',
    password: '',
  };

  name = new FormControl(null, Validators.required);
  password = new FormControl(null, Validators.minLength(3));

  constructor() {}

  ngOnInit(): void {}

  validForms(): boolean {
    if (this.name.valid && this.password.valid) {
      return true;
    } else {
      return false;
    }
  }
}
