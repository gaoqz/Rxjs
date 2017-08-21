import { Observable } from 'rxjs';
import { CoursesService } from './../services/courses.service';
import { Lesson } from './../shared/model/lesson';
import { Course } from './../shared/model/course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  courses$: Observable<Course[]>;
  latestLessons$: Observable<Lesson[]>;

  constructor(private courseService: CoursesService) { }

  ngOnInit() {
    this.courses$ = this.courseService.findAllCourses();
    this.latestLessons$ = this.courseService.findLatestLessons();
  }

}
