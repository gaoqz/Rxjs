import { Lesson } from './lesson';
import * as _ from 'lodash';
import { Observable, Observer, Subject, BehaviorSubject } from 'rxjs';

class DataStore {
    private lessonsListSubject = new BehaviorSubject([]);

    public lessonList$: Observable<Lesson[]> = this.lessonsListSubject.asObservable();

    initializeLessonsList(newList: Lesson[]) {
        this.lessonsListSubject.next(_.cloneDeep(newList));
    }

    addLesson(newLesson: Lesson) {
        const lessons = this.cloneLessons();
        lessons.push(_.cloneDeep(newLesson));

        this.lessonsListSubject.next(lessons);
    }

    toggleLessonViewed(toggled: Lesson) {
        const lessons = this.cloneLessons();
        const lesson = _.find(lessons, les => les.id === toggled.id);

        lesson.completed = !lesson.completed;
        this.lessonsListSubject.next(lessons);
    }

    delete(deleted: Lesson) {
          const lessons = this.cloneLessons();
          _.remove(lessons,
            lesson => lesson.id === deleted.id);

          this.lessonsListSubject.next(lessons);
    }

    private cloneLessons() {
        return _.cloneDeep(this.lessonsListSubject.getValue());
    }

}

export const store = new DataStore();
