import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  formCreateCustomer: FormGroup;
  listTypeCustomer = ['Dynamic','Gold','Medium','Vip']

  constructor() {
    this.formCreateCustomer = new FormGroup({
      nameCustomer: new FormControl('', Validators.required),
      customerCode: new FormControl('', [Validators.pattern('^KH-\\d{4}$'), Validators.required]),
      dateOfBirthCustomer: new FormControl('', [dateOfBirthValid,Validators.required]),
      cardCustomer: new FormControl('',[Validators.required,Validators.pattern('^(\\d{9}|\\d{12})$')]),
      phoneNumberCustomer: new FormControl('',[Validators.required,Validators.
      pattern('^(090\\d{7}|091\\d{7}|8490\\d{7}|8491\\d{7})$')]),
      emailCustomer: new FormControl('',[Validators.email,Validators.required]),
      addressCustomer: new FormControl('',Validators.required),
      idCustomerType: new FormControl('',Validators.required)
    });
    console.log(this.formCreateCustomer);
  }

  ngOnInit(): void {
  }

}

function dateOfBirthValid(fc: FormControl): any {
  return fc.value.substr(0, 4) < new Date().getFullYear() ? null : {date: true};
}
