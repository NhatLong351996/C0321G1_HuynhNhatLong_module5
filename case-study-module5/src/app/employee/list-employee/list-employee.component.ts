import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  listEmployee = [
    {idEmployee: 1, nameEmployee: 'Matina',id_position: 1, id_division: 2 },
    {idEmployee: 2, nameEmployee: 'Matina',id_position: 1, id_division: 2 },
    {idEmployee: 3, nameEmployee: 'Matina',id_position: 1, id_division: 2 },
    {idEmployee: 4, nameEmployee: 'Matina',id_position: 1, id_division: 2 }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
