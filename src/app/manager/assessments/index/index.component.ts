import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { CommentsDialogComponent } from '../comments-dialog/comments-dialog.component';


export const listData: lData[] = [
  {nome:"aqui",data:12,any:'asdf'},
  {nome:"aqui",data:12,any:'asdf'},
  {nome:"aqui",data:12,any:'asdf'},
  {nome:"aqui",data:12,any:'asdf'},
  {nome:"aqui",data:12,any:'asdf'},
  {nome:"aqui",data:12,any:'asdf'},
]

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  labels:string[] = ['nome','data','any']

  dataSource: lData[] = listData;

  constructor(protected dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog():void {
    let dialogRef = this.dialog.open(CommentsDialogComponent);
  }

}


export interface lData {
  nome: string;
  data:number;
  any: string;
}
