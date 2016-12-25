import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  sender = {
    userName: 'cooldavid',
    firstName: 'david',
    lastName: 'biton',
    avatar: 'https://inomics.com/sites/default/files/pictures/picture-95970-1460131169.png'
  };

  message = {
    sender: this.sender,
    content: 'lorem ipsum a lora',
    sendDate: new Date()
  }

messages= [this.message, this.message, this.message ]

  constructor() {


  }

  ngOnInit() {
  }


}
