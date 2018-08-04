import {Component, OnInit, Injectable} from '@angular/core';
import { LmsFormsService } from "../lmsformsservice.service";
import { FormBuilder, FormGroup,Validators } from "@angular/forms";
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-lmsforms',
  templateUrl: './lmsforms.component.html',
  styleUrls: ['./lmsforms.component.css']
})

export class LmsformsComponent implements OnInit {

  myForm : FormGroup;
  test : any;
  players : any;
  constructor(private lmsformsservice : LmsFormsService,private fb : FormBuilder, private firebase : AngularFireDatabase) {
    firebase.list("test")
            .valueChanges()
            .subscribe(data => {console.log(data); this.players = data;});
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      email : ["",[Validators.required,Validators.email]],
      message : ["",[Validators.required]],
      career:["",[ Validators.required ]]
    });
    this.myForm.valueChanges.subscribe(console.log);
  }

  handleFormSubmit(): void{
    console.log(this.myForm.value);
    this.firebase.list("/test").push(this.myForm.value);
  }
}
