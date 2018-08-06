import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {Http} from '@angular/http';

@Injectable()
export class UserService {

  constructor(private http: Http) {

  }

  getAllUsers() {
    return this.http.get('http://localhost:8082/user/all')
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

}
