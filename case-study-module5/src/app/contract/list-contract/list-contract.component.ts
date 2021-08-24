import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {
  listContract = [
    {idContract:1, dateBegin: '12/4/2021', dateEnd: '14/5/2021',id_employee:1,id_customer:2,id_service:3},
    {idContract:2, dateBegin: '12/4/2021', dateEnd: '14/5/2021',id_employee:1,id_customer:2,id_service:3},
    {idContract:3, dateBegin: '12/4/2021', dateEnd: '14/5/2021',id_employee:1,id_customer:2,id_service:3},
    {idContract:4, dateBegin: '12/4/2021', dateEnd: '14/5/2021',id_employee:1,id_customer:2,id_service:3}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
