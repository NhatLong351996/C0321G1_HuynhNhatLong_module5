import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {
  listService = [
    {idService: 1, nameService: 'Villa', serviceCode: 'SV-1234', id_type_service: 1,id_rent_type_service:2},
    {idService: 2, nameService: 'Villa', serviceCode: 'SV-1234', id_type_service: 1,id_rent_type_service:2},
    {idService: 3, nameService: 'Villa', serviceCode: 'SV-1234', id_type_service: 1,id_rent_type_service:2},
    {idService: 4, nameService: 'Villa', serviceCode: 'SV-1234', id_type_service: 1,id_rent_type_service:2}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
