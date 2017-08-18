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

  constructor(private db: AngularFireDatabase, private route: ActivatedRoute) {
    route.params
    .subscribe(params => {
      const courseUrl = params['id'];

      this.db.list('courses', {
        query: {
          orderByChild: 'url',
          equalTo: courseUrl
        }
      }).map(data => data[0])
      .subscribe(data => {
        this.course = data;

        this.db.list('lessons', {
          query: {
            orderByChild: 'courseId',
            equalTo: data.$key
          }
        }).subscribe(lessons => this.lessons = lessons);
      });

    });

  }

  ngOnInit() {
  }

}
