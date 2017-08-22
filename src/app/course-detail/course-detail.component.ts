import { Observable } from 'rxjs';
import { UserService } from './../services/user.service';
import { NewsletterService } from './../services/newsletter.service';
import { CoursesService } from './../services/courses.service';
import { Lesson } from './../shared/model/lesson';
import { Course } from './../shared/model/course';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database/database';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {

  course$: Observable<Course>;
  lessons$: Observable<Lesson[]>;

  constructor(private route: ActivatedRoute,
              private courseService: CoursesService,
              private newsletterService: NewsletterService,
              private userService: UserService) {
  }

  ngOnInit() {
      this.course$ = this.route.params
      .switchMap(params => this.courseService.findCourseByUrl(params['id']))
      .first()
      .publishLast().refCount();

      this.lessons$ = this.course$
      .switchMap(course => this.courseService.findLessonsForCourse(course.id))
      .first()
      .publishLast().refCount();
  }

}
