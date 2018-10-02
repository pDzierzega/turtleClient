import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class UserService {

  url = 'http://localhost:8099/user';

  constructor(private http: HttpClient) { }


  public getMe() {
    this.http
      .get(this.url)
      .subscribe(response =>
      console.log(JSON.stringify(response)));
  }

  public getAll() {
    return this.http
      .get(this.url + '/all');
  }

  sendNameWithREST ()  {
    let url = 'http://localhost:8099/api/chat/send';
    let body = {username: localStorage.getItem('currentUser')};

    this.http
      .post(url, body)
      .subscribe(response => {
        console.log(response);
      });
  }
}
