import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../customer/server/employee.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CinemaService} from '../cinema.service';

@Component({
  selector: 'app-edit-cinema',
  templateUrl: './edit-cinema.component.html',
  styleUrls: ['./edit-cinema.component.css']
})
export class EditCinemaComponent implements OnInit {
  id:number;
  date = Date.now().toString()
  formCreateCinema: FormGroup;
  listFirm = ['A','waiter','specialist','supervisor','manager','director'];
  constructor(private cinemaService:CinemaService,
              private activatedRoute: ActivatedRoute,
              private route:Router) {
    this.id=Number(activatedRoute.snapshot.params.id);
    cinemaService.findById(this.id).subscribe(value => {
      this.formCreateCinema.patchValue(value)
    })
  }

  ngOnInit(): void {
    this.formCreateCinema = new FormGroup({
      code: new FormControl('',Validators.pattern("^CI\\-\\d{4}$")),
      nameFirm: new FormControl(''),
      date: new FormControl('',validateBegin),
      ticket: new FormControl('',Validators.min(0))
    })
  }
  update() {
    this.cinemaService.edit(this.id,this.formCreateCinema.value).subscribe(value => {
      alert(value.code+" Update Success");
      this.route.navigateByUrl("/cinema/list")
    })

  }

}
function validateBegin(fc: FormControl):any {
  return fc.value <new Date().getDate() ? {date:true}:null;
}
