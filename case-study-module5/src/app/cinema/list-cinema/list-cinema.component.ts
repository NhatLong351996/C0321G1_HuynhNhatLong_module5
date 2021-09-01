import { Component, OnInit } from '@angular/core';
import {IEmployee} from '../../model/i-employee';
import {EmployeeService} from '../../customer/server/employee.service';
import {Cinema} from '../../model/cinema';
import {CinemaService} from '../cinema.service';

@Component({
  selector: 'app-list-cinema',
  templateUrl: './list-cinema.component.html',
  styleUrls: ['./list-cinema.component.css']
})
export class ListCinemaComponent implements OnInit {

  cinemaList: Cinema[] = [];
  search = '';
  constructor(private cinemaService:CinemaService) {
    cinemaService.getAll().subscribe(value => {
      this.cinemaList = value;
    })
  }

  ngOnInit(): void {
  }

  searchByName() {
    return this.cinemaService.searchByName(this.search).subscribe(value => {
      this.cinemaList = value;
    })
  }

}
