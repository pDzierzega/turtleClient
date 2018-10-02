import { Component, OnInit } from '@angular/core';
import {UserService} from '../_services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  users;

  constructor( private service: UserService) { }

  getAll() {
    this.service.getAll().subscribe(data => this.users = data);
    console.log(this.users);
  }

  GetMe() {
    this.service.getMe();

  }
}
