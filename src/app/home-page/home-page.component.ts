import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {


  users = [];
  searchName = '';


  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(u => {
      this.users = u;
      console.log(this.users);
    });
    /*this.userService.getAllUsers().subscribe(users => {
      this.users = users;
      console.log('Users', users);
    });*/
  }

}


