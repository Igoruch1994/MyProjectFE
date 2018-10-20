import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';


@Injectable()
export class SignUpService {

  signUpUrl = 'http://localhost:8080/user/sign-up';

  constructor(private http: HttpClient, private router: Router) {

  }

  signUp(firstName: string, lastName: string, phone: string, password: string, passwordConfirm: string, email: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    headers.append('Content-Type', 'application/json');

    this.http.post(this.signUpUrl, JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      password: password,
      passwordConfirm: passwordConfirm,
      email: email
    }), {withCredentials: true, headers: headers}).subscribe(data => {
      console.log('SignUp request' + data);
    });
  }
}
