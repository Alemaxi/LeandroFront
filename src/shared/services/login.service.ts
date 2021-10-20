import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Admin } from '../classes/admin';
import { LoginReturn } from '../classes/loginReturn';
import { AskCode } from '../classes/askCode';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  logado: LoginReturn = {auth: false};

  codeChangePassword: AskCode = {code: ''};

  constructor(protected http: HttpClient) { 
  }

  login(admin: Admin): Observable<LoginReturn> {
    return this.http.post<LoginReturn>(environment.api_url + "login/login",admin);
  }

  askCode(): Observable<AskCode> {
    return this.http.get<AskCode>(environment.api_url + "login/codechangepassword");
  }


}
