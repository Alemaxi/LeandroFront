import { NgModule } from '@angular/core';
import { RouterModule,Route } from '@angular/router';

import { LoginComponent } from './login/login.component';

const routes : Route[] = [
  {path:'', component: LoginComponent}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class ManagerRoutingModule { }
