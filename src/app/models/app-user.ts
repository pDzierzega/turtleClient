export class AppUser {
  uuid: string;
  username: string;

  constructor(data: any) {
    Object.assign(this, data);
  }
}
