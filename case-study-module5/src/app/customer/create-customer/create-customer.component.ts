import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../server/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  formCreateCustomer: FormGroup;
  listTypeCustomer = ['Dynamic','Gold','Medium','Vip']

  constructor(private customerService: CustomerService,
              private route: Router) {
    console.log(this.formCreateCustomer);
  }

  ngOnInit(): void {
    this.formCreateCustomer = new FormGroup({
      nameCustomer: new FormControl('', Validators.required),
      customerCode: new FormControl('', [Validators.pattern('^KH-\\d{4}$'), Validators.required]),
      dateOfBirthCustomer: new FormControl('', [dateOfBirthValid,Validators.required]),
      cardCustomer: new FormControl('',[Validators.required,Validators.pattern('^(\\d{9}|\\d{12})$')]),
      phoneNumberCustomer: new FormControl('',[Validators.required,Validators.
      pattern('^(090\\d{7}|091\\d{7}|8490\\d{7}|8491\\d{7})$')]),
      emailCustomer: new FormControl('',[Validators.email,Validators.required]),
      addressCustomer: new FormControl('',Validators.required),
      customerType: new FormControl('',Validators.required)
    });
  }
  create(){
    this.customerService.create(this.formCreateCustomer.value).subscribe(value => {
      alert(value.nameCustomer+" create success"),
        this.route.navigateByUrl("/customer/list")
    })
  }

}

function dateOfBirthValid(fc: FormControl): any {
  return fc.value.substr(0, 4) < new Date().getFullYear() ? null : {date: true};
}
