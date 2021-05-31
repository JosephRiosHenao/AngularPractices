import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderMetadataComponent } from './header-metadata/header-metadata.component';
import { FormsModule } from '@angular/forms';
import { FormBeforeWorkComponent } from './form-before-work/form-before-work.component';
import { FormAfterWorkComponent } from './form-after-work/form-after-work.component';
import { FormDuringWorkComponent } from './form-during-work/form-during-work.component';
import { ExtraInfoComponent } from './extra-info/extra-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderMetadataComponent,
    FormBeforeWorkComponent,
    FormAfterWorkComponent,
    FormDuringWorkComponent,
    ExtraInfoComponent
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
