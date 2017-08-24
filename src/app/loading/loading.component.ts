import { Router, RoutesRecognized, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

    loading$: Observable<boolean>;

    constructor(private router: Router) {}

    ngOnInit() {
        this.loading$ = this.router.events
        .map(event => event instanceof  NavigationStart || event instanceof RoutesRecognized );
    }

}
