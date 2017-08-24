import { MessagesService } from './../services/messages.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

    errors$: Observable<string[]>;

    constructor(private messagesService: MessagesService) { }

    ngOnInit() {
        this.errors$ = this.messagesService.errors$;
    }

    close() {
        this.messagesService.error();
    }
}
