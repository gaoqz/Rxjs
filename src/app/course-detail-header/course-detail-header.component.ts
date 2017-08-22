import { Lesson } from './../shared/model/lesson';
import { Course } from './../shared/model/course';
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-course-detail-header',
  templateUrl: './course-detail-header.component.html',
  styleUrls: ['./course-detail-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseDetailHeaderComponent implements OnInit {

    @Input() course: Course;
    @Input() lessons: Lesson[];
    @Input() firstName: string;
    @Output() subscribe = new EventEmitter();

    constructor() { }
    ngOnInit() {}

    onSubscribe(email: string) {
        this.subscribe.emit(email);
    }

}
