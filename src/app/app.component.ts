import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service';
import {LoginService} from './service/login.service';
import {SignUpService} from './service/signup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService, LoginService, SignUpService]
})
export class AppComponent implements OnInit {

  constructor(private loginService: LoginService) {
  }

  logout() {
    this.loginService.logout();
  }

  ngOnInit() {
    console.log('OnInit execution ...');
  }

}
