import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browser-event-experiments',
  templateUrl: './browser-event-experiments.component.html',
  styleUrls: ['./browser-event-experiments.component.scss']
})
export class BrowserEventExperimentsComponent implements OnInit {

  hoverSection: HTMLElement;
  constructor() { }

  ngOnInit() {
    this.hoverSection = document.getElementById('hover');

    this.hoverSection.addEventListener('mousemove', onMouseMove);
    this.hoverSection.addEventListener('click', onCLick);
  }

  unsubscribe() {
    console.log('Called unsubscribe()');

    this.hoverSection.removeEventListener('mousemove', onMouseMove);
  }

}

function onCLick(ev: Event) {
  console.log('click', ev);
}

function onMouseMove (ev: Event) {
  console.log(ev);
}
