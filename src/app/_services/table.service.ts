import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GameBuilder} from '../models/game-builder';

@Injectable()
export class TableService {

  private url = 'http://localhost:8099/api/table';

  constructor(private http: HttpClient) { }

  public getAll(): Promise<GameBuilder[]> {
    return this.http
      .get<GameBuilder[]>(this.url )
      .toPromise();
  }

  public get(uuid: string): Promise<GameBuilder> {
    return this.http
      .get<GameBuilder>(this.url + '/' + uuid)
      .toPromise();
  }

  public join (uuid: string): Promise<GameBuilder> {
    return this.http
      .post<GameBuilder>(this.url + '/join/' + uuid, uuid)
      .toPromise();
  }


  public create(name: string, number: number): Promise<GameBuilder> {
    const game = {
      name: name,
      numberOfPlayers: number,
    };
    return this.http
      .post<GameBuilder>(this.url + '/new', game)
      .toPromise();
  }

}
