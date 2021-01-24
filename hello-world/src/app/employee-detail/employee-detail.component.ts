import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  public employees = [];
  public errorMsg;
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
   this._employeeService.getEmployees()
    .subscribe(data => this.employees = data,
      error => this.errorMsg = error);
    

  }

}

