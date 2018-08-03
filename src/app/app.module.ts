import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule, MatFormFieldModule,MatSelectModule, MatButtonModule, MatCheckboxModule,
  MatChipsModule } from  '@angular/material';
import { AngularFireModule } from 'angularfire2'

import { AngularFireDatabaseModule } from 'angularfire2/database';
// for AngularFireAuth
import { AngularFireAuthModule } from 'angularfire2/auth';


import { AppComponent } from './app.component';
import { LmsformsComponent } from './lmsforms/lmsforms.component';
import { LmsFormsService } from './lmsformsservice.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {firebaseConfig} from "../environments/firebase.config";

@NgModule({
  declarations: [
    AppComponent,
    LmsformsComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),AngularFireDatabaseModule,AngularFireAuthModule,
    BrowserModule,HttpClientModule, BrowserAnimationsModule,MatInputModule,
    ReactiveFormsModule,MatFormFieldModule,MatButtonModule,MatSelectModule,MatCheckboxModule,MatChipsModule
  ],
  providers: [LmsFormsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
