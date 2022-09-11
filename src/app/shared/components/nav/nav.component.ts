import { Component, OnInit } from '@angular/core';
import {
  faClipboard,
  faHelmetSafety,
  faAddressCard,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

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

  constructor() {}

  ngOnInit(): void {}
}
