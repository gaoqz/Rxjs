import { Http, Headers } from '@angular/http';
import { User } from './../shared/model/user';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

export const UNKOWN_USER: User = {
    firstName: 'UnKnown'
};

@Injectable()
export class UserService {

    private subject = new BehaviorSubject(UNKOWN_USER);
    user$: Observable<User> = this.subject.asObservable();

    constructor(private http: Http) { }

    login(email: string, password: string): Observable<User> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post('/api/login', {email, password}, {headers: headers})
        .map(res => res.json())
        .do(user => console.log(user))
        .do(user => this.subject.next(user))
        .publishLast().refCount();
    }

}
