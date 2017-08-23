import { Lesson } from './../shared/model/lesson';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lesson-detail',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.scss']
})
export class LessonDetailComponent implements OnInit {

    @Input() lesson: Lesson;
    constructor() { }

    ngOnInit() {
    }

}
