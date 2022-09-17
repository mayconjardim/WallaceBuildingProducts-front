import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { DispatcherService } from '../../../services/dispatcher.service';
import { Dispatcher } from '../../../models/Dispatcher';
import { faUserPen, faUserMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dispatcher-list',
  templateUrl: './dispatcher-list.component.html',
  styleUrls: ['./dispatcher-list.component.scss'],
})
export class DispatcherListComponent implements OnInit {
  faUserPen = faUserPen;
  faUserMinus = faUserMinus;

  dispatchers: Observable<Dispatcher[]>;

  constructor(private service: DispatcherService) {
    this.dispatchers = this.service.findAll();
  }

  ngOnInit(): void {}
}
