import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class NewsletterService {

  constructor(private http: Http) { }

  subscribeToNewsletter(email: string): Observable<any> {
      return this.http.post('/api/newsletter', { email });
  }

}
