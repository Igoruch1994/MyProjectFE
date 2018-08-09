import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {Http, RequestOptions, Headers} from '@angular/http';

@Injectable()
export class LoginService {

  loginUrl = 'http://localhost:8080/user/login';

  constructor(private http: Http) {

  }

  loginUser() {

  }


  login() {
    let cpHeaders = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: cpHeaders});
    console.log('Login Service');
    this.http.post(this.loginUrl, JSON.stringify({
      email: 'igor@gmail.com',
      password: 'new'
    }), { headers: new Headers({ 'Content-Type': 'application/json' }) }).subscribe(
      res => {
        const response = res.text();
        console.log(response);
      }
    );
    console.log('Login Complite');

  }


}

