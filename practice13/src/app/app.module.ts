import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderMetadataComponent } from './header-metadata/header-metadata.component';
import { FormsModule } from '@angular/forms';
import { FormBeforeWorkComponent } from './form-before-work/form-before-work.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderMetadataComponent,
    FormBeforeWorkComponent
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
