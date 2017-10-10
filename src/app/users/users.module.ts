import { MaskDirective } from './../mask/mask.directive';
import { FiltroPipe } from './../filters/filtro.pipe';
import { ListUsersComponent } from './list-users/list-users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { SharedModule } from './../shared/shared.module';
import { UsersComponent } from './users.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const ROUTES: Routes = [
  { path: '', component: UsersComponent },
  { path: 'cadastrar', component: CreateUserComponent },
  { path: 'listar', component: ListUsersComponent }
]

@NgModule({
  declarations: [UsersComponent, CreateUserComponent, ListUsersComponent, FiltroPipe, MaskDirective],
  imports: [
    SharedModule, RouterModule.forChild(ROUTES)]
})
export class UsersModule { }
