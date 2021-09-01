import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CinemaService} from '../cinema.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-delete-cinema',
  templateUrl: './delete-cinema.component.html',
  styleUrls: ['./delete-cinema.component.css']
})
export class DeleteCinemaComponent implements OnInit {

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
  delete() {
    this.cinemaService.delete(this.id).subscribe(value => {
      alert(" Delete Success");
      this.route.navigateByUrl("/cinema/list")
    })

  }

}
function validateBegin(fc: FormControl):any {
  return fc.value <new Date().getDate() ? {date:true}:null;
}
