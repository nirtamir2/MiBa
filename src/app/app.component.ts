import {Component, OnInit} from '@angular/core';
import {User} from './core/models/User';

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

    constructor() {
    }

    ngOnInit() {
        this.user = new User();

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
