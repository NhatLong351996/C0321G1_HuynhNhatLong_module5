import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../customer/server/employee.service';
import {IEmployee} from '../../model/i-employee';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employeeList: IEmployee[] = [];
  search = '';
  p: any;
  constructor(private employeeService:EmployeeService) {
    employeeService.getAll().subscribe(value => {
      this.employeeList = value;
    })
  }

  ngOnInit(): void {
  }

  searchByName() {
    return this.employeeService.searchByName(this.search).subscribe(value => {
      this.employeeList = value;
      this.p=1;
    })
  }
}
