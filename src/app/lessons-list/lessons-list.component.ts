import { Observer } from 'rxjs';
import { Lesson } from './../shared/model/lesson';
import { store } from './../shared/model/event-bus';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss']
})

export class LessonsListComponent implements Observer<Lesson[]>, OnInit {

  lessons: Lesson[] = [];
  constructor() {
  }

  ngOnInit() {
    store.lessonList$.subscribe(lessons => this.next(lessons));
  }

  error(err: any) {
    console.log(err);
  }

  complete() {
    console.log('completed');
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
