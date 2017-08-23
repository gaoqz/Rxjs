import { Lesson } from './../shared/model/lesson';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss']
})

export class LessonsListComponent {

  @Input() lessons: Lesson[];
  @Output() selected = new EventEmitter<Lesson>();

  constructor() {
  }

  select(lesson: Lesson) {
      this.selected.next(lesson);
  }

}
