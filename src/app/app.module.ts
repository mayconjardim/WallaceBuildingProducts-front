import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Components
import { NavComponent } from './shared/components/nav/nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './private/components/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptorProvider } from './core/interceptors/auth.interceptor';
import { ManagerListComponent } from './private/components/manager/manager-list/manager-list.component';
import { ManagerCreateComponent } from './private/components/manager/manager-create/manager-create.component';
import { ManagerUpdateComponent } from './private/components/manager/manager-update/manager-update.component';
import { ManagerDeleteComponent } from './private/components/manager/manager-delete/manager-delete.component';
import { DispatcherListComponent } from './private/components/dispatcher/dispatcher-list/dispatcher-list.component';
import { DispatcherCreateComponent } from './private/components/dispatcher/dispatcher-create/dispatcher-create.component';
import { DispatcherUpdateComponent } from './private/components/dispatcher/dispatcher-update/dispatcher-update.component';
import { DispatcherDeleteComponent } from './private/components/dispatcher/dispatcher-delete/dispatcher-delete.component';
import { OrdersListComponent } from './private/components/orders/orders-list/orders-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterPipe } from './shared/pipes/filtro.pipe';
import { OrderCreateComponent } from './private/components/orders/order-create/order-create.component';
import { OrderUpdateComponent } from './private/components/orders/order-update/order-update.component';
import { OrderReadComponent } from './private/components/orders/order-read/order-read.component';
import { OrderPrintComponent } from './private/components/orders/order-print/order-print.component';
import { OrderCartComponent } from './private/components/orders/order-cart/order-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ManagerListComponent,
    LoginComponent,
    ManagerCreateComponent,
    ManagerUpdateComponent,
    ManagerDeleteComponent,
    DispatcherCreateComponent,
    DispatcherUpdateComponent,
    DispatcherDeleteComponent,
    DispatcherListComponent,
    OrdersListComponent,
    FilterPipe,
    OrderCreateComponent,
    OrderUpdateComponent,
    OrderReadComponent,
    OrderPrintComponent,
    OrderCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      closeButton: true,
      progressBar: true,
    }),
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
