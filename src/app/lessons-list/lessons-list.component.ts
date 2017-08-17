import { Lesson } from './../shared/model/lesson';
import { store, Observer } from './../shared/model/event-bus';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss']
})

export class LessonsListComponent implements Observer, OnInit {

  lessons: Lesson[] = [];
  constructor() {}

  ngOnInit(): void {
    console.log('Lesson list component is registered as observer ...');
    store.subscribe(this);
  }

  next(data: Lesson[]) {
    console.log('Lessons list component received data ...');
    this.lessons = data;
  }

  toggleLessonViewed(lesson: Lesson) {
    console.log('toggling lesson ...');
    store.toggleLessonViewed(lesson);
  }

  delete(deleted: Lesson) {
    store.delete(deleted);
  }

}
