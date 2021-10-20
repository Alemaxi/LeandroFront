import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { Comment } from '../classes/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(protected http: HttpClient) { }

  takeComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(environment.api_url + 'comments');
  }
}
