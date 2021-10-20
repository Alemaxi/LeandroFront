import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { LoginComponent } from './login/login.component';

import { AdminGuard } from '../shared/guards/admin.guard';
import { LoginGuard } from '../shared/guards/login.guard';
import { ChangePasswordComponent } from '../manager/change-password/change-password.component';

const routes: Route[] = [
  {
    path: '',
    canActivate: [LoginGuard],
    component: LoginComponent
  },
  {
    path: 'changepassword',
    component: ChangePasswordComponent
  },
  {
    path: 'assessments',
    canActivate: [AdminGuard],
    loadChildren: () => import('./assessments/assessments.module').then(m => m.AssessmentsModule)
  }
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
