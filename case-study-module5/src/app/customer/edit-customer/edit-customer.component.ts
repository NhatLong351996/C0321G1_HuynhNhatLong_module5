import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../server/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
   formCreateCustomer: FormGroup;
  id: number;
  listTypeCustomer = ['Dynamic','Gold','Medium','Vip']

  constructor(private customerService:CustomerService,
              private activatedRoute: ActivatedRoute,
              private route:Router) {
   this.id= Number(activatedRoute.snapshot.params.id)
    this.customerService.findById(this.id).subscribe(value => {
      this.formCreateCustomer.patchValue(value)
    })
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
update(){
    this.customerService.edit(this.id,this.formCreateCustomer.value).subscribe(value => {
      alert(value.nameCustomer+" update success");
      this.route.navigateByUrl("/customer/list")
    })
}

}
function dateOfBirthValid(fc: FormControl): any {
  return fc.value.substr(0, 4) < new Date().getFullYear() ? null : {date: true};
}
