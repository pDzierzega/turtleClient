import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppUser} from '../models/app-user';

@Injectable()
export class AuthenticationService {

  appUser$;
  username;

  constructor(private http: HttpClient) {
    if (localStorage.getItem('token')) {
      this.appUser$ = this.getUser();
      this.appUser$.subscribe(appUser => this.username = appUser.username);
    }
  }

  signin (username: string, password: string) {
    let url = 'http://localhost:8099/login';
    let body = {username: username, password: password};

    this.http.post(url, body, {observe: 'response'})
      .subscribe(response => {
        localStorage.setItem('token', response.headers.get('Authorization'));
      });

    this.username = username;
  }

  signup (username: string, password: string) {
    let url = 'http://localhost:8099/user/sign-up';
    let body = {username: username, password: password, confirmedPassword: password};

    this.http.post(url, body, {observe: 'response'})
      .subscribe(response => {
        console.log(response.status);
      });
  }

  logout() {
    localStorage.removeItem('token');
    this.appUser$ = null;
    this.username = null;
  }

  getUser () {
    return this.http.get<AppUser>(`http://localhost:8099/user`);
  }
}
