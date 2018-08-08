import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-setup-page',
  templateUrl: './setup-page.component.html',
  styleUrls: ['./setup-page.component.scss']
})
export class SetupPageComponent implements OnInit {

  userId;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userId = this.userService.userId;
  }

  onChange() {
    this.userService.setUserId(this.userId);
  }

}
