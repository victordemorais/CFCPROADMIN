import { format } from 'url';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
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
import * as moment from 'moment';
@Component({
  selector: 'pro-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  dates: Date[] = [];

  public AgendaAluno: FormGroup;
  mostrar: boolean = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.AgendaAluno = this.formBuilder.group({
      data: this.formBuilder.control('', Validators.required),
    });
  }
  preverAgenda(valueDate) {

    let data = moment(valueDate.data, "DD/MM/YYYY").format("MM-DD-YYYY");
    var days = 0;
    let i = 0 ;
    
    while (days < 5) {
     
      let valordata = moment(addDays(data, i)).weekday();
       if (valordata == 6 || valordata == 0) {
        console.log(valordata);
       } else{
        console.log(valordata);
          this.dates.push(addDays(data, i));
          days++;
      }
        i++ ;
    }
    
      this.mostrar = true;
      console.log(this.dates);
  }
  
  submit(form){
    console.log(form)
  }
}
