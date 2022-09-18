import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faClipboard,
  faHelmetSafety,
  faAddressCard,
  faUser,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  faClipboard = faClipboard;
  faHelmetSafety = faHelmetSafety;
  faAddressCard = faAddressCard;
  faUser = faUser;
  faArrowRightFromBracket = faArrowRightFromBracket;

  constructor(
    private router: Router,
    private auth: AuthService,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    this.router.navigate(['orders/read/1']);
  }

  logout() {
    this.router.navigate(['login']);
    this.auth.logout();
    this.toast.info('Logout Successful');
  }
}
