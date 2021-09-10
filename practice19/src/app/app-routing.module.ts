import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormOneTemplateComponent } from './components/form-one-template/form-one-template.component';
import { FormsComponent } from './components/forms/forms.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PeopleComponent } from './components/people/people.component';
import { TasksComponent } from './components/tasks/tasks.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "dashboard", component: HomeComponent},
  {path: "forms", component: FormsComponent},
  {path: "form-one", component: FormOneTemplateComponent},
  {path: "people", component: PeopleComponent},
  {path: "tasks", component: TasksComponent},
  {path: "login", component: LoginComponent},
  {path: "**", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
