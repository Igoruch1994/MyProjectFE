import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {LoginForm} from '../interface/LoginForm';
import {User} from '../interface/user';

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
    }), {withCredentials: true, headers: headers}).subscribe(data => {
      console.log('Login request' + data);
      this.router.navigate(['/home']);
    });
  }

  logout() {
    console.log('Logout function');
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:8080/user/logout', {withCredentials: true, headers: headers})
      .subscribe(data => {
      console.log('Logout request' + data);
      this.router.navigate(['/login']);
    });
  }

}

