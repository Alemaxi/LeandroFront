import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

//components
import { IndexComponent } from './index/index.component';

const routes: Route[] = [
  {path:'',component: IndexComponent},
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
export class AssessmentsRoutingModule { }
