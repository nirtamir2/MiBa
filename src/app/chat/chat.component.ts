import { Component, OnInit } from '@angular/core';
import { User } from 'app/core/models/user';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  sender: User;
  message: any;
  messages: any[];

  constructor() { }

  ngOnInit() {
    this.sender = {
      userName: 'cooldavid',
      firstName: 'david',
      lastName: 'biton',
      avatar: 'https://inomics.com/sites/default/files/pictures/picture-95970-1460131169.png'
    };

    this.message = {
      sender: this.sender,
      content: 'lorem ipsum a lora',
      sendDate: new Date()
    }

    this.messages = [this.message, this.message, this.message]
  }


}
