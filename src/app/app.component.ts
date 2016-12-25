import { Component, OnInit } from '@angular/core';
import { User } from 'app/core/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app works!';

  user: User;
  meetup: any;
  chatItems: any;
  date: Date = new Date();


  constructor() { }

  ngOnInit() {
    this.user = {
      userName: 'cooldavid',
      firstName: 'david',
      lastName: 'biton',
      avatar: 'https://inomics.com/sites/default/files/pictures/picture-95970-1460131169.png'
    };

    this.meetup = {
    meetupName: 'soccer heroes',
  };

    this.chatItems = [{
      user: this.user,
      meetup: this.meetup,
      lastMessage: 'lets play soccer in Azur'
    }];

  }

}
