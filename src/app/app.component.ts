import {Component} from '@angular/core';
import {UserService} from './user.service';
import {LoginService} from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService, LoginService]
})
export class AppComponent {


}
