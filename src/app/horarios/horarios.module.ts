import { KzPikadayDirective } from './agendar/kazale.directive';
import { OverlayModule } from "angular-io-overlay";
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { AgendarComponent } from './agendar/agendar.component';
import { CalendarComponent } from './calendar/calendar.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';
import { DatepickerComponent } from './agendar/datepicker/datepicker.component';
import {MatExpansionModule} from '@angular/material';
const ROUTES: Routes = [
  { path: '', component: AgendarComponent },
  { path: 'agendar', component: AgendarComponent },
]


@NgModule({
  imports: [
    MatExpansionModule ,
    CommonModule,
    CalendarModule.forRoot(),
    SharedModule,
    NguiAutoCompleteModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    KzPikadayDirective,
    CalendarComponent,
    AgendarComponent,
    DatepickerComponent,
  ]})
export class HorariosModule { }
