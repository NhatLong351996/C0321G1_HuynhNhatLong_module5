import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EmployeeService} from '../../customer/server/employee.service';
import {Router} from '@angular/router';
import {CinemaService} from '../cinema.service';

@Component({
  selector: 'app-create-cinema',
  templateUrl: './create-cinema.component.html',
  styleUrls: ['./create-cinema.component.css']
})
export class CreateCinemaComponent implements OnInit {
  date = Date.now().toString()
  formCreateCinema: FormGroup
  listFirm = ['A','waiter','specialist','supervisor','manager','director'];

  constructor(private cinemaService:CinemaService,
              private route:Router) { }

  ngOnInit(): void {
    this.formCreateCinema = new FormGroup({
      code: new FormControl('',Validators.pattern("^CI\\-\\d{4}$")),
      nameFirm: new FormControl(''),
      date: new FormControl('',validateBegin),
      ticket: new FormControl('',Validators.min(0))
    })
  }
  create() {
    this.cinemaService.create(this.formCreateCinema.value).subscribe(value => {
      alert("🐝"+value.code+" create success");
      this.route.navigateByUrl("/cinema/list")
    })
  }

}
function validateBegin(fc: FormControl):any {
return fc.value.substr(8,10) >new Date().getDay() ? {date:true}:null;
}
