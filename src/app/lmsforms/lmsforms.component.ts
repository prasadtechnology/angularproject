import {Component, OnInit, Injectable} from '@angular/core';
import { LmsFormsService } from "../lmsformsservice.service";
import { FormBuilder, FormGroup,Validators } from "@angular/forms";
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';


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
    // this.lmsformsservice.getFormData()
    //                 .subscribe(data => {
    //                             this.test = data;
    //                             console.log(data);
    //                             },
    //                             error => {
    //                             console.log(error);
    //                             });
    this.players = firebase.list("players");
    console.log(this.players);
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      email : ["",[Validators.required,Validators.email]],
      message : ["",[]],
      career:["",[  ]]
    });
    this.myForm.valueChanges.subscribe(console.log);
  }

  handleFormSubmit(): void{
    console.log(this.myForm.value)
  }
}
