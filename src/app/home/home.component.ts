import { Lesson } from './../shared/model/lesson';
import { Course } from './../shared/model/course';
import { AngularFireDatabase } from 'angularfire2/database/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  courses: Course[];
  latestLessons: Lesson[];

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.db.list('courses')
    .do(console.log)
    .subscribe(data => this.courses = data);

    this.db.list('lessons', {
      query: {
        orderByKey: true,
        limitToLast: 10
      }
    }).do(console.log)
    .subscribe(data => this.latestLessons = data);

    console.log(this.courses);
    console.log(this.latestLessons);
  }

}
