import {Injectable} from "@angular/core";
// import  { Observable } from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LmsFormsService{

  constructor(private http: HttpClient){}

  getTest() : string{
    return "success";
  }
  getFormData() : any{
    console.log("called");
      return this.http.get("http://www.omdbapi.com/?i=tt3896198&apikey=f5773c8")
                      .pipe(map(data => data));
  }

}
