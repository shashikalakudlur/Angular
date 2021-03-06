import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable/throw';

@Injectable()
  /*providedIn: 'root'
})*/
export class EmployeeService {
 private _url: string = "/assets/data/employees.json";
  constructor(private http: HttpClient) { }

  getEmployees():Observable<IEmployee[]>{

    return this.http.get<IEmployee[]>(this._url)
      .catch(this.errorHandler);
  }
      errorHandler(error: HttpErrorResponse){
 return Observable.throw(error.message || "server error");
        
      
 }
}
