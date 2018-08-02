import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule, MatFormFieldModule,MatSelectModule, MatButtonModule, MatCheckboxModule,
  MatChipsModule } from  '@angular/material';

import { AppComponent } from './app.component';
import { LmsformsComponent } from './lmsforms/lmsforms.component';
import { LmsFormsService } from './lmsformsservice.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LmsformsComponent
  ],
  imports: [
    BrowserModule,HttpClientModule, BrowserAnimationsModule,MatInputModule,
    ReactiveFormsModule,MatFormFieldModule,MatButtonModule,MatSelectModule,MatCheckboxModule,MatChipsModule
  ],
  providers: [LmsFormsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
