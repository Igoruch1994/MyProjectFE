import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {Http} from '@angular/http';

@Injectable()
export class LoginService {

  userId = '';

  constructor(private http: Http) {

  }

  loginUser() {

  }

  getAllUsers() {
    return this.http.get('http://localhost:8080/user/all/' + this.userId)
      .pipe(map(response => response.json()))
      .pipe(map(users => {
        console.log(users);
        return users.map(u => {
          return {
            name: u.firstName + ' ' + u.lastName,
          };
        });
      }));
  }

  setUserId(id) {
    this.userId = id;
  }

}

