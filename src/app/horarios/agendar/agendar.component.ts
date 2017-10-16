import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { UserService } from './../../users/user.service';
import { UserModel } from './../../users/user.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
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
@Component({
  selector: 'pro-agendar',
  templateUrl: './agendar.component.html',
  styleUrls: ['./agendar.component.css']
})
export class AgendarComponent implements OnInit {

  public AgendaAluno: FormGroup;
  users: UserModel[];

  horarios: any[] = [
    { label: '06:00', value: '06:00:00' },
    { label: '07:00', value: '07:00:00' },
    { label: '08:00', value: '08:00:00' },
    { label: '09:00', value: '09:00:00' },
    { label: '10:00', value: '10:00:00' },
    { label: '11:00', value: '11:00:00' },
    { label: '12:00', value: '12:00:00' },
    { label: '13:00', value: '13:00:00' },
    { label: '14:00', value: '14:00:00' },
    { label: '15:00', value: '15:00:00' },
    { label: '16:00', value: '16:00:00' },
    { label: '17:00', value: '17:00:00' },
    { label: '18:00', value: '18:00:00' },
    { label: '19:00', value: '19:00:00' },
    { label: '20:00', value: '20:00:00' },
    { label: '21:00', value: '21:00:00' },
  ]

  constructor(private userService: UserService, private _sanitizer: DomSanitizer, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.AgendaAluno = this.formBuilder.group({
      aluno: this.formBuilder.control('', Validators.required),
      data: this.formBuilder.control('', Validators.required),
      hourStart: this.formBuilder.control('', Validators.required),
      hourEnd: this.formBuilder.control('', Validators.required),
    });
    this.userService.users()
      .subscribe(
      users => this.users = users
      );
  }

  autocompleListFormatter = (data: any): SafeHtml => {
    let html = `<span class="teste">${data.nome}</span>`;
    return this._sanitizer.bypassSecurityTrustHtml(html);
  }


  dates: Date[] = [];

  mostrar: boolean = false;


  preverAgenda(valueDate) {

    let data = moment(valueDate.data, "DD/MM/YYYY").format("MM-DD-YYYY");
    var days = 0;
    let i = 0;

    while (days < 5) {

      let valordata = moment(addDays(data, i)).weekday();
      if (valordata == 6 || valordata == 0) {
        console.log(valordata);
      } else {
        console.log(valordata);
        this.dates.push(addDays(data, i));
        days++;
      }
      i++;
    }

    this.mostrar = true;
    console.log(this.dates);
  }

  submit(form) {
    console.log(form)
  }
}
