import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/auth.service';
import { Credentials } from 'src/app/private/models/Credentials';

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

  constructor(
    private toast: ToastrService,
    private service: AuthService,
    private router: Router
  ) {}

  login() {
    this.service.authenticate(this.creds).subscribe(
      (response) => {
        this.service.successfulLogin(
          response.headers.get('Authorization').substring(7)
        );
        this.router.navigate(['']);
      },
      () => {
        this.toast.error('Name or password invalid!');
      }
    );
  }

  ngOnInit(): void {}

  validForms(): boolean {
    return this.name.valid && this.password.valid;
  }
}
