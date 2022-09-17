import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DispatcherService } from 'src/app/private/services/dispatcher.service';
import { Dispatcher } from 'src/app/private/models/Dispatcher';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dispatcher-delete',
  templateUrl: './dispatcher-delete.component.html',
  styleUrls: ['./dispatcher-delete.component.scss'],
})
export class DispatcherDeleteComponent implements OnInit {
  dispatcher: Dispatcher = {
    id: '',
    name: '',
    profiles: [],
  };

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

  delete(): void {
    this.service.delete(this.dispatcher.id).subscribe(
      (response) => {
        this.toast.success('Dispatcher deleted successfully');
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
}
