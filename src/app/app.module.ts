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

@NgModule({
  declarations: [
    AppComponent,
    BrowserEventExperimentsComponent,
    LessonsListComponent,
    LessonsCounterComponent,
    EventBusExperimentsComponent,
    HomeComponent,
    CourseDetailComponent
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
      CoursesService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
