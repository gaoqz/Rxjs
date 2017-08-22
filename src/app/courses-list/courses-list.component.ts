import { Course } from './../shared/model/course';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

    @Input() courses: Course[];
    constructor() { }

    ngOnInit() {
    }

}
