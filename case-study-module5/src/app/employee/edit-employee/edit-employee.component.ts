import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../customer/server/employee.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
id:number;
  date = Date.now().toString()
  formCreateEmployee: FormGroup;
  listPosition = ['Receptionist','waiter','specialist','supervisor','manager','director'];
  listDivision = ['Sales – Marketing','Administration','Service','Management'];
  listEducation = ['Intermediate','College','Undergraduate','Graduate'];

  constructor(private employeeService:EmployeeService,
              private activatedRoute: ActivatedRoute,
              private route:Router) {
    this.id=Number(activatedRoute.snapshot.params.id);
    employeeService.findById(this.id).subscribe(value => {
      this.formCreateEmployee.patchValue(value)
    })
  }

  ngOnInit(): void {
    this.formCreateEmployee = new FormGroup({
      nameEmployee: new FormControl('',[Validators.required]),
      dateOfBirth: new FormControl('',[Validators.required,dateOfBirthValid]),
      card: new FormControl('',[Validators.required,
        Validators.pattern('^(\\d{9}|\\d{12})$')]),
      salary: new FormControl('',[Validators.required,salaryValid]),
      phoneNumber: new FormControl('',[Validators.required,
        Validators.pattern('^(090\\d{7}|091\\d{7}|8490\\d{7}|8491\\d{7})$')]),
      email: new FormControl('',[Validators.required,Validators.email]),
      addressEmployee: new FormControl('',Validators.required),
      position: new FormControl('',[Validators.required]),
      education_degree: new FormControl('',Validators.required),
      division: new FormControl('',Validators.required)
    })
  }

  update() {
    this.employeeService.edit(this.id,this.formCreateEmployee.value).subscribe(value => {
      alert(value.nameEmployee+" Update Success");
      this.route.navigateByUrl("/employee/list")
    })

  }
}
function dateOfBirthValid(fc: FormControl): any {
  return fc.value.substr(0, 4) < new Date().getFullYear() ? null : {date: true};
}
function salaryValid(fc: FormControl) :any{
  return fc.value <= 20000000? null: {salary: true};
}
