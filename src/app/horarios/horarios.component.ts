import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';

@Component({
  selector: 'pro-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent implements OnInit {
  view: string = 'month';
  
    viewDate: Date = new Date();
  
    events: CalendarEvent[] = [];
  
    clickedDate: Date;
  constructor() { }

  ngOnInit() {
  }

}
