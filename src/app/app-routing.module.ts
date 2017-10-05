import { HorariosComponent } from './horarios/horarios.component';
import { CreateComponent } from './questions/create/create.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'questoes', component: CreateComponent },
  { path: 'users', loadChildren: './users/users.module#UsersModule'},
  { path: 'horarios', component: HorariosComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
