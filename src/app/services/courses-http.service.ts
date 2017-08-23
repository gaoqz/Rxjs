import { Lesson } from './../shared/model/lesson';
import { Course } from './../shared/model/course';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CoursesHttpService {

    constructor(private http: Http) { }

    findCourseById(courseId: number): Observable<Course> {
        return this.http.get(`/api/courses/${courseId}`)
        .map(res => res.json());
    }

    findLessonDetailById(lessonsId): Observable<Lesson> {
        return this.http.get(`/api/lessons/${lessonsId}`)
        .map(res => res.json());
    }

}
