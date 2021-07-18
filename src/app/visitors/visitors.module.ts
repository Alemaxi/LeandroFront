import { NgModule } from '@angular/core';
import { Route,RouterModule } from '@angular/router'

import { VisitorsMainComponent } from './visitors-main/visitors-main.component';

const route: Route[] = [
  {path:'', component: VisitorsMainComponent},
]


@NgModule({
  declarations: [
    VisitorsMainComponent,
  ],
  imports: [
    RouterModule.forChild(route),
  ]
})
export class VisitorsModule { }
