import { MessagesService } from './../services/messages.service';
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
    detail$: Observable<Lesson>;

    constructor(private courseHttpService: CoursesHttpService,
                private lessonsPagerService: LessonsPagerService,
                private messagesService: MessagesService) { }

    ngOnInit() {
        this.course$ = this.courseHttpService.findCourseById(this.id);
        this.lessons$ = this.lessonsPagerService.lessonsPager$;

        this.lessonsPagerService.loadFirstPage(this.id)
        .subscribe(
            () => {},
            err => this.messagesService.error('error loading the first page')
        );
    }

    previousLessonsPage() {
        this.lessonsPagerService.previous()
        .subscribe(
            () => {},
            err => this.messagesService.error('error loading the previous page')
        );
    }

    nextLessonsPage() {
        this.lessonsPagerService.next()
        .subscribe(
            () => {},
            err => this.messagesService.error('error loading the next page')
        );
    }

    backToMaster() {
        this.detail$ = undefined;
    }

    selectDetail(lesson: Lesson) {
        this.detail$ = this.courseHttpService.findLessonDetailById(lesson.url);
    }

    ngOnDestroy() {
        console.log('destroying CourseComponent ...');
    }

}
