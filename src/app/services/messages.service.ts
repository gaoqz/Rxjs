import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class MessagesService {

    private errorsSubject = new BehaviorSubject<string[]>([]);
    errors$: Observable<string[]> = this.errorsSubject.asObservable();

    constructor() { }

    error(...errors: string[]) {
        this.errorsSubject.next(errors);
    }

}
