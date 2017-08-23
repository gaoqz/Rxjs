import { LessonsPagerService } from './../services/lessons-pager.service';
import { CoursesHttpService } from './../services/courses-http.service';
import { Lesson } from './../shared/model/lesson';
import { Course } from './../shared/model/course';
import { Observable } from 'rxjs';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  providers: [LessonsPagerService]
})
export class CourseComponent implements OnInit, OnDestroy {

    @Input() id: number;
    course$: Observable<Course>;
    lessons$: Observable<Lesson[]>;

    constructor(private courseHttpService: CoursesHttpService,
                private lessonsPagerService: LessonsPagerService) { }

    ngOnInit() {
        this.course$ = this.courseHttpService.findCourseById(this.id);
        this.lessons$ = this.lessonsPagerService.lessonsPager$;

        this.lessonsPagerService.loadFirstPage(this.id);
    }

    previoueLessonsPage() {
        this.lessonsPagerService.previous();
    }

    nextLessonsPage() {
        this.lessonsPagerService.next();
    }

    ngOnDestroy() {
        console.log('destroying CourseComponent ...');
    }

}
