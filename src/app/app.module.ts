import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppMaskerModule } from 'brmasker';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './users/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './questions/create/create.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { UsersComponent } from './users/users.component';
import { FiltroPipe } from './filters/filtro.pipe';
import { InputComponent } from './shared/input/input.component';
import { HorariosComponent } from './horarios/horarios.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CreateComponent,
    CreateUserComponent,
    UsersComponent,
    FiltroPipe,
    HorariosComponent
  ],
  imports: [
    AppMaskerModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    SharedModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
