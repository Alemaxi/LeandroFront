import { NgModule } from '@angular/core';
import { Route,RouterModule } from '@angular/router'

//material modules
import { CommentsModule } from '../../shared/material-modules/comments/comments.module';

import { VisitorsMainComponent } from './visitors-main/visitors-main.component';
import { VisitorsCommentsComponent } from './visitors-comments/visitors-comments.component';

const route: Route[] = [
  {path:'', component: VisitorsMainComponent},
]


@NgModule({
  declarations: [
    VisitorsMainComponent,
    VisitorsCommentsComponent,
  ],
  imports: [
    RouterModule.forChild(route),
    CommentsModule,
  ]
})
export class VisitorsModule { }
