import {Component, OnInit} from '@angular/core';
import {ICustomer} from '../../model/i-customer';
import {CustomerService} from '../server/customer.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  listCustomer :ICustomer[] = []

  constructor(private customerService:CustomerService) {
    customerService.getAll().subscribe(value => {
      this.listCustomer = value;
      console.log(value);
    })
  }

  ngOnInit(): void {
  }

}
