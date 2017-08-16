import { Lesson } from './../shared/model/lesson';
import { globalEventBus, Observer, LESSONS_LIST_AVAILABLE, ADD_NEW_LESSON } from './../shared/model/event-bus';
import { Component } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss']
})

export class LessonsListComponent implements Observer {

  lessons: Lesson[] = [];
  constructor() {
    console.log('Lesson list component is registered as observer ...');
    globalEventBus.registerObserver(LESSONS_LIST_AVAILABLE, this);

    globalEventBus.registerObserver(ADD_NEW_LESSON, {
      notify: lessonText => {
        this.lessons.push({
          id: Math.random(),
          description: lessonText
        });
      }
    });
  }

  notify(data: Lesson[]) {
    console.log('Lessons list component received data ...');
    this.lessons = data.slice(0);
  }

  toggleLessonViewed(lesson: Lesson) {
    console.log('toggling lesson ...');
    lesson.completed = !lesson.completed;
  }

  delete(deleted: Lesson) {
    _.remove(this.lessons,
      lesson => lesson.id === deleted.id);
  }

}
