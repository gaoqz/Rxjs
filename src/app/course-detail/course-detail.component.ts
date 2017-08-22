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

  course: Course;
  lessons: Lesson[];

  constructor(private route: ActivatedRoute,
              private courseService: CoursesService,
              private newsletterService: NewsletterService,
              private userService: UserService) {

  }

  ngOnInit() {
    this.route.params
    .subscribe(params => {
      const courseUrl = params['id'];

      this.courseService.findCourseByUrl(courseUrl)
      .subscribe(data => {
        this.course = data;

        this.courseService.findLessonsForCourse(this.course.id)
        .subscribe(lessons => this.lessons = lessons);
      });

    });
  }

  onSubscribe(email: string) {
      this.newsletterService.subscribeToNewsletter(email)
      .subscribe(
          () => alert('Subscription successful'),
          console.error
      );
  }

}
