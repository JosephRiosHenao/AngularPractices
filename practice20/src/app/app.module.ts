import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SumComponent } from './sum/sum.component';
import { SubtractionComponent } from './subtraction/subtraction.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SumComponent,
    SubtractionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
