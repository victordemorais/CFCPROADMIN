import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'pro-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
 

  public AgendaAluno: FormGroup;
  mostrar:boolean = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.AgendaAluno = this.formBuilder.group({
      data: this.formBuilder.control('', Validators.required),
    });
  }
  preverAgenda() {
   this.mostrar = true;
  }
}
