import { Component, OnInit } from '@angular/core';
import {LmsFormsService} from "../lmsformsservice.service";
import {FormBuilder, FormGroup,Validators} from "@angular/forms";

@Component({
  selector: 'app-lmsforms',
  templateUrl: './lmsforms.component.html',
  styleUrls: ['./lmsforms.component.css']
})
export class LmsformsComponent implements OnInit {

  myForm : FormGroup;
  test : any;
  constructor(private lmsformsservice : LmsFormsService,private fb : FormBuilder) {
    // this.lmsformsservice.getFormData()
    //                 .subscribe(data => {
    //                             this.test = data;
    //                             console.log(data);
    //                             },
    //                             error => {
    //                             console.log(error);
    //                             });
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      email : ["",[Validators.required]],
      message : ["",[]],
      career:["",[  ]]
    });
    this.myForm.valueChanges.subscribe(console.log);
  }

  handleFormSubmit(): void{
    console.log(this.myForm.value)
  }
}
