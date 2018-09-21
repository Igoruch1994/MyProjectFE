import {Component, OnInit} from '@angular/core';
import {LoginService} from '../service/login.service';
import {LoginForm} from '../interface/LoginForm';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  userEmail;
  userPassword;
  loginForm: LoginForm;

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
  }

  login() {
    console.log('UserPassword', this.userPassword);
    console.log('UserEmail', this.userEmail);

    /*this.loginForm.email = this.userEmail;
    this.loginForm.password = this.userPassword;*/
    return this.loginService.login(this.userEmail, this.userPassword);
  }

}
