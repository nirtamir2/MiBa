import {User} from './User';
export class Message {
  sender: User;
  content: string;
  sendDate: Date;

  constructor(sender?: User, content?: string, sendDate?: Date) {
    this.sender = sender ? sender : new User();
    this.content = content ? content : 'message';
    this.sendDate = sendDate ? sendDate : new Date();
  }
}
