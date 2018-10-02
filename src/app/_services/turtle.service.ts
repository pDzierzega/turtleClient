import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Turtle} from '../models/turtle';

@Injectable()
export class TurtleService {

  private url = 'http://localhost:8099/api/turtle';

  constructor(private http: HttpClient) { }

  get(): Promise<Turtle> {
    return this.http
      .get<Turtle>(this.url)
      .toPromise();
  }

}
