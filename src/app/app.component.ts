import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';

  user = {
    userName: 'cooldavid',
    firstName: 'david',
    lastName: 'biton',
    avatar: 'https://inomics.com/sites/default/files/pictures/picture-95970-1460131169.png'
  };

  meetup = {
    meetupName: 'soccer heroes',
  };


  chatItems = [{
    user: this.user,
    meetup: this.meetup,
    lastMessage: 'lets play soccer in Azur'
  }];

  date: Date = new Date();
}
