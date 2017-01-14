export class User {
  userName: string;
  firstName: string;
  lastName: string;
  avatar: string;

  constructor(userName?: string, firstName?: string, lastName?: string, avatar?: string) {
    this.userName = userName ? userName : 'userName';
    this.firstName = firstName ? firstName : 'firstName';
    this.lastName = lastName ? lastName : 'lastName';
    this.avatar = avatar ? avatar : 'https://inomics.com/sites/default/files/pictures/picture-95970-1460131169.png';
  }

}
