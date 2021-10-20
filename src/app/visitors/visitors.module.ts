import { NgModule,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route,RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';

//material modules
import { CommentsModule } from '../../shared/material-modules/comments/comments.module';
import { ExamplesModule } from '../../shared/material-modules/examples/examples.module';

import { VisitorsMainComponent } from './visitors-main/visitors-main.component';
import { VisitorsCommentsComponent } from './visitors-comments/visitors-comments.component';
import { VisitorsExamplesComponent } from './visitors-examples/visitors-examples.component';

const route: Route[] = [
  {path:'', component: VisitorsMainComponent},
]


@NgModule({
  declarations: [
    VisitorsMainComponent,
    VisitorsCommentsComponent,
    VisitorsExamplesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    CommentsModule,
    ExamplesModule,
    FormsModule,
  ]
})
export class VisitorsModule { }
