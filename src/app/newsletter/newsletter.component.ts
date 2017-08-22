import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {

    @Input() firstName: string;
    @Output() subscribe = new EventEmitter();

    constructor() { }

    ngOnInit() {}

    subscribeToNewsletter(emailField) {
        this.subscribe.emit(emailField.value);
        emailField.value = '';
    }

}
