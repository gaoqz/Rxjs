import { Observable } from 'rxjs';
import { UserService, UNKOWN_USER } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

    isloggedIn$: Observable<boolean>;

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.isloggedIn$ = this.userService.user$.map(user => user !== UNKOWN_USER);
    }

}
