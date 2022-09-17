import { AuthGuard } from './core/auth/auth.guard';
import { LoginComponent } from './private/components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerListComponent } from './private/components/manager/manager-list/manager-list.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { ManagerCreateComponent } from './private/components/manager/manager-create/manager-create.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: NavComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'managers', component: ManagerListComponent },
      { path: 'managers/create', component: ManagerCreateComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
