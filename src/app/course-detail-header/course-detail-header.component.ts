import { Lesson } from './../shared/model/lesson';
import { Course } from './../shared/model/course';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-course-detail-header',
  templateUrl: './course-detail-header.component.html',
  styleUrls: ['./course-detail-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseDetailHeaderComponent {

    @Input() course: Course;
    @Input() lessons: Lesson[];

}
