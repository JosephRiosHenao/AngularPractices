import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SumComponent } from './sum/sum.component';
import { SubtractionComponent } from './subtraction/subtraction.component';
import { FormsModule } from '@angular/forms';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { DivisionComponent } from './division/division.component';
import { SquareComponent } from './square/square.component';
import { SuperComponent } from './super/super.component';
import { CubeComponent } from './cube/cube.component';
import { SalaryComponent } from './salary/salary.component';
import { TriangleComponent } from './triangle/triangle.component';
import { CircleComponent } from './circle/circle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SumComponent,
    SubtractionComponent,
    MultiplicationComponent,
    DivisionComponent,
    SquareComponent,
    SuperComponent,
    CubeComponent,
    SalaryComponent,
    TriangleComponent,
    CircleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
