import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  formSignUp: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.formSignUp = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      passWord: new FormControl('',[passWordValid,Validators.required,Validators.minLength(6)]),
      country: ['',Validators.required],
      age: new FormControl('',[Validators.required,Validators.min(18)]),
      phone: new FormControl('',[Validators.required,Validators.pattern('^\\+84\\d{9,10}$')]),
      gender: ['',Validators.required],
    });
    console.log(this.formSignUp)
  }

}

function passWordValid(formControl: FormControl): any {
const key = formControl.value.substr(0,1)
  let flag = true;
  for (let i=0;i<formControl.value.length;i++){
    if (key != formControl.value[i]){
      flag = false;
      break;
    }
  }
  if (!flag){
    return {passValid: true}
  }
  return null;
}
