import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PeopleComponent } from './components/people/people.component';
import { TasksComponent } from './components/tasks/tasks.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "people", component: PeopleComponent},
  {path: "tasks", component: TasksComponent},
  {path: "login", component: LoginComponent},
  {path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
