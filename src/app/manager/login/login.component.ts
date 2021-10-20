import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { Admin } from '../../../shared/classes/admin';

import { LoginService } from '../../../shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  admin = new FormGroup({
    name: new FormControl(''),
    password: new FormControl('')
  })

  constructor(
    protected login: LoginService,
    protected router: Router
  ) { }

  ngOnInit(): void {
  }

  submit() {
    let admin: Admin = {
      name: this.admin.get('name')?.value,
      password: this.admin.get('password')?.value,
    }

    this.login.login(admin).subscribe(
      result => {
        this.login.logado = result;
        if(result.auth){
          this.router.navigate(['manager', 'assessments'])
        }
      }
    )
  }

  codeChangePassword() {
    this.login.askCode().subscribe(
      result => {
        this.login.codeChangePassword = result;
        console.log(result);
        this.router.navigate(['manager','changepassword']);
      }
    );
  }

}
