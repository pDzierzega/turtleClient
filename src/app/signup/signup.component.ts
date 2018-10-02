import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../_services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  username = 'admin@gmail.com';
  password = 'password';
  confirmPassword = 'password';

  constructor(private authService: AuthenticationService) { }

  signUp() {
    if (this.username && this.password) {
      this.authService.signup(this.username, this.password);
    }
  }
}
