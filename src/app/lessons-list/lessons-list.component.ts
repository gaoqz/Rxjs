import { Lesson } from './../shared/model/lesson';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss']
})

export class LessonsListComponent {

  @Input() lessons: Lesson[];

  constructor() {
  }

}
