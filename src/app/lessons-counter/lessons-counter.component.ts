import { Lesson } from './../shared/model/lesson';
import { store } from './../shared/model/event-bus';
import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-lessons-counter',
  templateUrl: './lessons-counter.component.html',
  styleUrls: ['./lessons-counter.component.scss']
})
export class LessonsCounterComponent implements OnInit, Observer<Lesson[]> {

  lessonsCounter = 0;
  ngOnInit() {
    console.log('lesson list component is registered as observer ..');

    store.lessonList$.subscribe(lessons => this.next(lessons));
  }

  error(err: any) {
    console.log(err);
  }

  complete() {
    console.log('completed');
  }

  next(data: Lesson[]) {
    console.log('couter component received data ..');
    this.lessonsCounter = data.length;
  }

}
