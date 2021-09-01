import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCustomerComponent} from './customer/list-customer/list-customer.component';
import {CreateCustomerComponent} from './customer/create-customer/create-customer.component';
import {EditCustomerComponent} from './customer/edit-customer/edit-customer.component';
import {DeleteCustomerComponent} from './customer/delete-customer/delete-customer.component';
import {BodyComponent} from './body/body.component';
import {ListEmployeeComponent} from './employee/list-employee/list-employee.component';
import {CreateEmployeeComponent} from './employee/create-employee/create-employee.component';
import {EditEmployeeComponent} from './employee/edit-employee/edit-employee.component';
import {DeleteEmployeeComponent} from './employee/delete-employee/delete-employee.component';
import {ListCinemaComponent} from './cinema/list-cinema/list-cinema.component';
import {CreateCinemaComponent} from './cinema/create-cinema/create-cinema.component';
import {EditCinemaComponent} from './cinema/edit-cinema/edit-cinema.component';
import {DeleteCinemaComponent} from './cinema/delete-cinema/delete-cinema.component';


const routes: Routes = [
  {path:"",component: BodyComponent},
  {path:'customer/list',component:ListCustomerComponent},
  {path:"customer/create",component:CreateCustomerComponent},
  {path:"customer/edit/:id",component:EditCustomerComponent},
  {path:"customer/delete/:id",component:DeleteCustomerComponent},
  {path:"employee/list",component:ListEmployeeComponent},
  {path:"employee/create",component:CreateEmployeeComponent},
  {path:"employee/edit/:id",component:EditEmployeeComponent},
  {path:"employee/delete/:id",component:DeleteEmployeeComponent},
  {path:"cinema/list",component:ListCinemaComponent},
  {path:"cinema/create",component:CreateCinemaComponent},
  {path:"cinema/edit/:id",component:EditCinemaComponent},
  {path:"cinema/delete/:id",component:DeleteCinemaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
