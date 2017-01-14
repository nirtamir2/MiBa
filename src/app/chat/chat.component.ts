import {Component, OnInit} from '@angular/core';
import {User} from '../core/models/User';
import * as io from 'socket.io-client';
import {Message} from "../core/models/Message";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  sender: User;
  messages: Array<Message> = [];
  io: any;
  messageText: string;

  constructor() {
  }

  ngOnInit() {
    this.sender = new User();
    this.io = io();
    this.io.on('message', (message: Message) => {
      this.messages.push(message);
    })
  }

  sendMessage(messageText: string) {
    let message: Message = new Message(this.sender, messageText);
    this.messages.push(message);
    this.messageText = '';
    this.io.emit('message', message);
  }

}
