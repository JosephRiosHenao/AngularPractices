import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment.prod';
import { LoginComponent } from './components/login/login.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { PeopleComponent } from './components/people/people.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { NgSelect2Module } from 'ng-select2';
import { FormsComponent } from './components/forms/forms.component';
import { FormOneTemplateComponent } from './components/form-one-template/form-one-template.component';
import { ExtraInfoComponent } from './components/form-one/extra-info/extra-info.component';
import { FormAfterWorkComponent } from './components/form-one/form-after-work/form-after-work.component';
import { FormDuringWorkComponent } from './components/form-one/form-during-work/form-during-work.component';
import { FormBeforeWorkComponent } from './components/form-one/form-before-work/form-before-work.component';
import { HeaderComponent } from './components/form-one/header/header.component';
import { HeaderMetadataComponent } from './components/form-one/header-metadata/header-metadata.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TasksComponent,
    PeopleComponent,
    HomeComponent,
    FormsComponent,
    FormOneTemplateComponent,
    ExtraInfoComponent,
    FormAfterWorkComponent,
    FormBeforeWorkComponent,
    FormDuringWorkComponent,
    HeaderComponent,
    HeaderMetadataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    NgSelect2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
