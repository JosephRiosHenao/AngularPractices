import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  {path: '', component: TableComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'client/edit/:id', component: EditClientComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
