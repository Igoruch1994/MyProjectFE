import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {LoginForm} from '../interface/LoginForm';

@Injectable()
export class LoginService {

  loginUrl = 'http://localhost:8080/user/login';

  constructor(private http: HttpClient, private router: Router) {

  }

  loginUser() {

  }


  login(userEmail: string, userPassword: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    headers.append('Content-Type', 'application/json');

    this.http.post(this.loginUrl, JSON.stringify({
      email: userEmail,
      password: userPassword
    }),{withCredentials: true, headers: headers}).subscribe(data => {
      console.log('Login request'  + data);
      this.router.navigate(['/home']);
    });

    /*this.http.post(this.loginUrl, JSON.stringify({
      email: userEmail,
      password: userPassword
    }), {headers: headers}).subscribe(res => {
      console.log(res.toString());
    });*/

    /*const cpHeaders = new Headers({'Content-Type': 'application/json'});
    console.log('Login Service');
    this.http.post(this.loginUrl, JSON.stringify({
      email: email,
      password: password
    }), {withCredentials: true, headers: new Headers({ 'Content-Type': 'application/json' }) }).subscribe(
      res => {
        const response = res.text();
        console.log(response);
      }
    );
    console.log('Login Complite');*/

  }


}

