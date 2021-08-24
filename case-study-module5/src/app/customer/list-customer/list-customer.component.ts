import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  listCustomer = [
    {id: 1, idCustomerType: 1, customerCode: 'KH-1680', nameCustomer: 'Alex A', dateOfBirthCustomer: '13/5/1996', cardCustomer: '123456', phoneNumberCustomer: '12345677', emailCustomer: '123@gmail.com', addressCustomer: 'Da Nang'},
    {id: 2, idCustomerType: 2, customerCode: 'KH-1080', nameCustomer: 'Alex B', dateOfBirthCustomer: '2/5/1996', cardCustomer: '123456', phoneNumberCustomer: '12345677', emailCustomer: '123@gmail.com', addressCustomer: 'Da Nang'},
    {id: 3, idCustomerType: 1, customerCode: 'KH-1180', nameCustomer: 'Alex C', dateOfBirthCustomer: '3/5/1996', cardCustomer: '123456', phoneNumberCustomer: '12345677', emailCustomer: '123@gmail.com', addressCustomer: 'Da Nang'}
    ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
