import { MessagesService } from './services/messages.service';
import { CoursesHttpService } from './services/courses-http.service';
import { UserService } from './services/user.service';
import { NewsletterService } from './services/newsletter.service';
import { CoursesService } from './services/courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth/auth.module';
import { AngularFireDatabaseModule } from 'angularfire2/database/database.module';

import { routerConfig } from './app.router';
import { firebaseConfig } from '../environments/firebase.config';

import { AppComponent } from './app.component';
import { BrowserEventExperimentsComponent } from './browser-event-experiments/browser-event-experiments.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { LessonsCounterComponent } from './lessons-counter/lessons-counter.component';
import { EventBusExperimentsComponent } from './event-bus-experiments/event-bus-experiments.component';
import { HomeComponent } from './home/home.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { LoginComponent } from './login/login.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { CourseDetailHeaderComponent } from './course-detail-header/course-detail-header.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { AllLessonsComponent } from './all-lessons/all-lessons.component';
import { CourseComponent } from './course/course.component';
import { LessonDetailComponent } from './lesson-detail/lesson-detail.component';
import { SafeUrlPipe } from './shared/pipes/safe-url.pipe';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    BrowserEventExperimentsComponent,
    LessonsListComponent,
    LessonsCounterComponent,
    EventBusExperimentsComponent,
    HomeComponent,
    CourseDetailComponent,
    CoursesListComponent,
    LoginComponent,
    TopMenuComponent,
    CourseDetailHeaderComponent,
    NewsletterComponent,
    AllLessonsComponent,
    CourseComponent,
    LessonDetailComponent,
    SafeUrlPipe,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [
      CoursesService,
      NewsletterService,
      UserService,
      CoursesHttpService,
      MessagesService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
