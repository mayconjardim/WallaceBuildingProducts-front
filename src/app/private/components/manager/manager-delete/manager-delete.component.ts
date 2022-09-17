import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/private/services/manager.service';
import { Manager } from 'src/app/private/models/Manager';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manager-delete',
  templateUrl: './manager-delete.component.html',
  styleUrls: ['./manager-delete.component.scss'],
})
export class ManagerDeleteComponent implements OnInit {
  manager: Manager = {
    id: '',
    name: '',
    email: '',
    phoneNumber: '',
    profiles: [],
  };

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

  delete(): void {
    this.service.delete(this.manager.id).subscribe(
      (response) => {
        this.toast.success('Manager deleted successfully');
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
}
