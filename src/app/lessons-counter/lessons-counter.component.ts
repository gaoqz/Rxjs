import { Lesson } from './../shared/model/lesson';
import { globalEventBus, LESSONS_LIST_AVAILABLE, ADD_NEW_LESSON } from './../shared/model/event-bus';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lessons-counter',
  templateUrl: './lessons-counter.component.html',
  styleUrls: ['./lessons-counter.component.scss']
})
export class LessonsCounterComponent implements OnInit {

  lessonsCounter = 0;
  constructor() {
    console.log('lesson list component is registered as observer ..');
    globalEventBus.registerObserver(LESSONS_LIST_AVAILABLE, this);

    globalEventBus.registerObserver(ADD_NEW_LESSON, {
      notify: lessonText => this.lessonsCounter += 1
    });
  }

  ngOnInit() {
  }

  notify(data: Lesson[]) {
    console.log('couter component received data ..');
    this.lessonsCounter = data.length;
  }

}
