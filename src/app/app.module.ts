import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Components
import { NavComponent } from './shared/components/nav/nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ManagerListComponent } from './private/components/manager/manager-list/manager-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './private/components/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptorProvider } from './core/interceptors/auth.interceptor';
import { ManagerCreateComponent } from './private/components/manager/manager-create/manager-create.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ManagerListComponent,
    LoginComponent,
    ManagerCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
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
