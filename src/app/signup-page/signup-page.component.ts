import {Component} from '@angular/core';
import {SignUpService} from '../service/signup.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignUpComponent {

  firstName;
  lastName;
  phone;
  password;
  passwordConfirm;
  email;

  constructor(private signUpService: SignUpService) {
  }

  signUp() {
    console.log('FirstName', this.firstName);
    return this.signUpService.signUp(this.firstName, this.lastName, this.phone, this.password, this.passwordConfirm, this.email);
  }
}
