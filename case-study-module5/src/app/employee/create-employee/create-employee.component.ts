import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  date = Date.now().toString()
  formCreateEmployee: FormGroup
  listPosition = ['Receptionist','waiter','specialist','supervisor','manager','director'];
  listDivision = ['Sales – Marketing','Administration','Service','Management'];
  listEducation = ['Intermediate','College','Undergraduate','Graduate'];


  constructor() {
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
      id_position: new FormControl('',[Validators.required]),
      id_education_degree: new FormControl('',Validators.required),
      id_division: new FormControl('',Validators.required)
    })
  }

  ngOnInit(): void {
  }

}
function dateOfBirthValid(fc: FormControl): any {
  return fc.value.substr(0, 4) < new Date().getFullYear() ? null : {date: true};
}
function salaryValid(fc: FormControl) :any{
return fc.value <= 20000000? null: {salary: true};
}
