import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

const route: Route[] =[
  {
    path:'',
    loadChildren: () => import('./visitors/visitors.module').then(m => m.VisitorsModule),
  },
  {
    path:'manager',
    loadChildren: () => import('./manager/manager.module').then(m => m.ManagerModule),
  }
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
