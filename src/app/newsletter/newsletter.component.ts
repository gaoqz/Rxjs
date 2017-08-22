import { Observable } from 'rxjs';
import { UserService } from './../services/user.service';
import { NewsletterService } from './../services/newsletter.service';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {
    firstName$: Observable<string>;
    constructor(private newsletterService: NewsletterService,
                private userService: UserService) { }

    ngOnInit() {
        this.firstName$ = this.userService.user$
        .map(user => user.firstName);
    }

    subscribeToNewsletter(emailField) {
        this.newsletterService.subscribeToNewsletter(emailField.value)
        .subscribe(
            () => {
                emailField.value = '';
                alert('Subscrive sucessful');
            },
            console.error
        );
    }

}
