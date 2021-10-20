import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';

//material
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { AssessmentsRoutingModule } from './assessments-routing.module';
import { CommentsDialogComponent } from './comments-dialog/comments-dialog.component';



@NgModule({
  declarations: [
    IndexComponent,
    CommentsDialogComponent
  ],
  imports: [
    CommonModule,
    AssessmentsRoutingModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
  ]
})
export class AssessmentsModule { }
