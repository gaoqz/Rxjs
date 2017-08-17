import { Lesson } from './lesson';
import * as _ from 'lodash';

export interface Observer {
    next(data: any);
}

interface Observable {
    subscribe(obs: Observer);
    unsubscribe(obs: Observer);
}

interface Subject extends Observer, Observable {
}

class SubjectImplementation implements Subject {
    private observers: Observer[] = [];

    next(data: any) {
        this.observers.forEach(obs => obs.next(data));
    }

    subscribe(obs: Observer) {
        this.observers.push(obs);
    }

    unsubscribe(obs: Observer) {
        _.remove(this.observers, el => el === obs);
    }
}

const lessonsListSubject = new SubjectImplementation();

export let lessonList$: Observable = {
    subscribe: obs => {
        lessonsListSubject.subscribe(obs);
        obs.next(lessons);
    },
    unsubscribe: obs => lessonsListSubject.unsubscribe(obs)
};

let lessons: Lesson[] = [];

export function initializeLessonsList(newList: Lesson[]) {
    lessons = _.cloneDeep(newList);
    lessonsListSubject.next(lessons);
}

class DataStore implements Observable {
    private lessons: Lesson[] = [];

    private lessonsListSubject = new SubjectImplementation();

    // public lessonList$: Observable = {
    //     subscribe: obs => {
    //         lessonsListSubject.subscribe(obs);
    //         obs.next(this.lessons);
    //     },
    //     unsubscribe: obs => lessonsListSubject.unsubscribe(obs)
    // };

    subscribe(obs: Observer) {
        lessonsListSubject.subscribe(obs);
        obs.next(this.lessons);
    }

    unsubscribe(obs: Observer) {
        lessonsListSubject.unsubscribe(obs);
    }

    initializeLessonsList(newList: Lesson[]) {
        this.lessons = _.cloneDeep(newList);
        this.broadcast();
    }

    addLesson(newLesson: Lesson) {
        this.lessons.push(_.cloneDeep(newLesson));
        this.broadcast();
    }

    toggleLessonViewed(toggled: Lesson) {
        const lesson = _.find(this.lessons, les => les.id === toggled.id);

        lesson.completed = !lesson.completed;
        this.broadcast();
    }

    delete(deleted: Lesson) {
        _.remove(this.lessons,
          lesson => lesson.id === deleted.id);
          this.broadcast();
    }

    broadcast() {
        lessonsListSubject.next(_.cloneDeep(this.lessons));
    }
}

export const store = new DataStore();
