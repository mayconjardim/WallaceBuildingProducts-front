import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../services/manager.service';
import { Manager } from '../../models/Manager';
import { faThumbsDown } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.scss'],
})
export class ManagerListComponent implements OnInit {
  managers: Observable<Manager[]>;

  constructor(private service: ManagerService) {
    this.managers = this.service.findAll();
  }

  ngOnInit(): void {}
}
