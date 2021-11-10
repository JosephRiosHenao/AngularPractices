import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SumComponent } from './sum/sum.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "sum", component: SumComponent},
  {path: "**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
