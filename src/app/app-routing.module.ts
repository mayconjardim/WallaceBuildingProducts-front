import { AuthGuard } from './core/auth/auth.guard';
import { LoginComponent } from './private/components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerListComponent } from './private/components/manager/manager-list/manager-list.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { ManagerCreateComponent } from './private/components/manager/manager-create/manager-create.component';
import { ManagerDeleteComponent } from './private/components/manager/manager-delete/manager-delete.component';
import { ManagerUpdateComponent } from './private/components/manager/manager-update/manager-update.component';
import { DispatcherListComponent } from './private/components/dispatcher/dispatcher-list/dispatcher-list.component';
import { DispatcherDeleteComponent } from './private/components/dispatcher/dispatcher-delete/dispatcher-delete.component';
import { DispatcherUpdateComponent } from './private/components/dispatcher/dispatcher-update/dispatcher-update.component';
import { DispatcherCreateComponent } from './private/components/dispatcher/dispatcher-create/dispatcher-create.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: NavComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'managers', component: ManagerListComponent },
      { path: 'managers/create', component: ManagerCreateComponent },
      { path: 'managers/update/:id', component: ManagerUpdateComponent },
      { path: 'managers/delete/:id', component: ManagerDeleteComponent },

      { path: 'dispatchers', component: DispatcherListComponent },
      { path: 'dispatchers/create', component: DispatcherCreateComponent },
      { path: 'dispatchers/update/:id', component: DispatcherUpdateComponent },
      { path: 'dispatchers/delete/:id', component: DispatcherDeleteComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
