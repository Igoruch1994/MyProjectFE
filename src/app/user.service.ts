import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {Http, Headers} from '@angular/http';

@Injectable()
export class UserService {

  userId = '';

  constructor(private http: Http) {

  }

  getAllUsers() {
    return this.http.get('http://localhost:8080/user/all', {withCredentials: true})
      .pipe(map(response => response.json()))
      .pipe(map(users => {
        console.log('Usserssssss', users);
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

