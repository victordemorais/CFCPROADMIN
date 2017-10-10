import { CalendarModel } from './calendar.model';
import { PRO_API } from './../../app.api';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { CalendarEvent } from 'angular-calendar';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};
@Component({
  selector: 'pro-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  view = 'month';
  viewDate: Date = new Date();
  refresh: Subject<any> = new Subject();
  events: CalendarEvent[] = [];
  activeDayIsOpen: boolean = true;
  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.getHorario().subscribe(
      data => {
        let listaTarefa:  Array<CalendarEvent> = new Array<CalendarEvent>();
        if (data.length > 0) {
          data.forEach(tarefa => {
              let evt:CalendarEvent = {
                  start: new Date(tarefa.start),
                  end: new Date(tarefa.end),
                  title: tarefa.title,
                  color: colors.yellow,
                  meta: {tarefa},
              };
  
              listaTarefa.push(evt);
          });
          
        } 
        console.log(listaTarefa)
        this.events=(listaTarefa);
        this.refresh.next();
      }
    );
   

  }

  getHorario(): Observable<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(`http://localhost/testeaula/server/src/horario.php`);
  }
}
