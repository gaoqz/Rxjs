import { Lesson } from './../shared/model/lesson';
import { Observer, store } from './../shared/model/event-bus';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lessons-counter',
  templateUrl: './lessons-counter.component.html',
  styleUrls: ['./lessons-counter.component.scss']
})
export class LessonsCounterComponent implements OnInit, Observer {

  lessonsCounter = 0;
  ngOnInit() {
    console.log('lesson list component is registered as observer ..');

    store.subscribe(this);
  }

  next(data: Lesson[]) {
    console.log('couter component received data ..');
    this.lessonsCounter = data.length;
  }

}
