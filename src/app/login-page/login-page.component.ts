import { Component, OnInit } from '@angular/core';
import {LoginService} from "../service/login.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  userName;
  userEmail;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  login() {
    console.log('UserName', this.userName);
    console.log('UserEmail', this.userEmail);
  }

}
