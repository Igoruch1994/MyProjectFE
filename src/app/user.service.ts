import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from './interface/user';
import {Observable} from 'rxjs';

@Injectable()
export class UserService {

  userId = '';

  constructor(private http: HttpClient) {

  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8080/user/all', {withCredentials: true});
  }

  setUserId(id) {
    this.userId = id;
  }

}

