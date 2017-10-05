import { CalendarEvent } from 'angular-calendar';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pro-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  view = 'month';
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];
  constructor() { }

  ngOnInit() {
  }

}
