import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserEventExperimentsComponent } from './browser-event-experiments/browser-event-experiments.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { LessonsCounterComponent } from './lessons-counter/lessons-counter.component';
import { EventBusExperimentsComponent } from './event-bus-experiments/event-bus-experiments.component';

@NgModule({
  declarations: [
    AppComponent,
    BrowserEventExperimentsComponent,
    LessonsListComponent,
    LessonsCounterComponent,
    EventBusExperimentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
