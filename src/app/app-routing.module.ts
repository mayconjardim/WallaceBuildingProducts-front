import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerListComponent } from './private/components/manager-list/manager-list.component';
import { NavComponent } from './shared/components/nav/nav.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [{ path: 'managers', component: ManagerListComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
