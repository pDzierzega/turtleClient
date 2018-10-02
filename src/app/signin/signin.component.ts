import { Component } from '@angular/core';
import {AuthenticationService} from '../_services/authentication.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  username = 'admin@gmail.com';
  password = 'password';

  constructor(private authService: AuthenticationService) {
  }

  login() {
    if (this.username && this.password) {
      this.authService.signin(this.username, this.password);
    }
  }
}
