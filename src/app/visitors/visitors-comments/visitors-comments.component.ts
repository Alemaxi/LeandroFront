import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../../shared/services/comments.service';
import { Comment } from '../../../shared/classes/comment';

@Component({
  selector: 'app-visitors-comments',
  templateUrl: './visitors-comments.component.html',
  styleUrls: ['./visitors-comments.component.scss']
})
export class VisitorsCommentsComponent implements OnInit {

  constructor(protected commentsService:CommentsService) { }

  ngOnInit(): void {
  }

}
