import { Observable } from 'rxjs';
import { Lesson } from './../shared/model/lesson';
import { Course } from './../shared/model/course';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {

  course$: Observable<Course>;
  lessons$: Observable<Lesson[]>;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.course$ = this.route.data.map(data => data['detail'][0]);

    this.lessons$ = this.route.data.map(data => data['detail'][1]);
  }

}
