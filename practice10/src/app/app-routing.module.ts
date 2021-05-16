import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path : "",
    component: HomeComponent
  },
  {
    path : "about-me",
    component: AboutMeComponent
  },
  {
    path : "help",
    component: HelpComponent
  },
  {
    path : "users",
    component: UsersComponent,
    children:
    [
      {
        path : "add",
        component: AddUserComponent
      },
      {
        path : "edit",
        component: EditUserComponent
      }
    ],
  },
  {
    path : "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
