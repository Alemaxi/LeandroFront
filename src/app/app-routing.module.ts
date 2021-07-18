import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

const route: Route[] =[
  {
    path:'',
    loadChildren: () => import('./visitors/visitors.module').then(m => m.VisitorsModule),
  },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(route),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
