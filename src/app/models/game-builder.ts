import {AppUser} from './app-user';

export interface GameBuilder {
  uuid: string;
  name: string;
  userList: AppUser[];
  numberOfPlayers: string;
}
