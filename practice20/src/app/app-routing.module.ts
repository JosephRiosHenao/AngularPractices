import { SalaryComponent } from './salary/salary.component';
import { SuperComponent } from './super/super.component';
import { DivisionComponent } from './division/division.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubtractionComponent } from './subtraction/subtraction.component';
import { SumComponent } from './sum/sum.component';
import { SquareComponent } from './square/square.component';
import { CubeComponent } from './cube/cube.component';
import { TriangleComponent } from './triangle/triangle.component';
import { CircleComponent } from './circle/circle.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "sum", component: SumComponent},
  {path: "substraction", component: SubtractionComponent},
  {path: "multiplication", component: MultiplicationComponent},
  {path: "division", component: DivisionComponent},
  {path: "super", component: SuperComponent},
  {path: "root", component: SquareComponent},
  {path: "cube", component: CubeComponent},
  {path: "pyramid", component: TriangleComponent},
  {path: "circle", component: CircleComponent},
  {path: "salary", component: SalaryComponent},
  {path: "**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
