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

  user: User;
  messages: Array<Message> = [];
  rsvps: Array<User> = [];
  io: any;
  messageText: string;

  constructor() {
    this.io = io();
  }

  ngOnInit(): void {
    this.user = new User();
    console.log(this.user);
    this.io.on('message', (message: Message) => {
      this.messages.push(message);
    });
    this.io.on("rsvpAdd", (rsvp) => {
      this.rsvps.push(rsvp);

    });
    this.io.on("rsvpRemove", (unRsvp) => {
      this.rsvps = this.rsvps.filter((rsvp) => {
        return rsvp.id !== unRsvp.id;
      });
    });
  }

  sendMessage(messageText: string): void {
    let message: Message = new Message(this.user, messageText);
    this.messages.push(message);
    this.messageText = '';
    this.io.emit('message', message);
  }

  RSVP(event): void {
    if (event.checked) {
      this.rsvps.push(this.user);
      this.io.emit('rsvpAdd', this.user);
    }
    else {
      this.rsvps = this.rsvps.filter((rsvp) => {
        return rsvp.id !== this.user.id;
      });
      this.io.emit('rsvpRemove', this.user);
    }
  }

}
