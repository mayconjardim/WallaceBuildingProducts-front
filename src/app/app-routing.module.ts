import { OrderCreateComponent } from './private/components/orders/order-create/order-create.component';
import { OrdersListComponent } from './private/components/orders/orders-list/orders-list.component';
import { AuthGuard } from './core/auth/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './private/components/login/login.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { ManagerListComponent } from './private/components/manager/manager-list/manager-list.component';
import { ManagerCreateComponent } from './private/components/manager/manager-create/manager-create.component';
import { ManagerDeleteComponent } from './private/components/manager/manager-delete/manager-delete.component';
import { ManagerUpdateComponent } from './private/components/manager/manager-update/manager-update.component';
import { DispatcherListComponent } from './private/components/dispatcher/dispatcher-list/dispatcher-list.component';
import { DispatcherCreateComponent } from './private/components/dispatcher/dispatcher-create/dispatcher-create.component';
import { DispatcherDeleteComponent } from './private/components/dispatcher/dispatcher-delete/dispatcher-delete.component';
import { DispatcherUpdateComponent } from './private/components/dispatcher/dispatcher-update/dispatcher-update.component';

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

      { path: 'orders', component: OrdersListComponent },
      { path: 'orders/create', component: OrderCreateComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
