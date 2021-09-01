import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICustomer} from '../../model/i-customer';
import {IEmployee} from '../../model/i-employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  API_URL_EMPLOYEE = "http://localhost:3000/employeeList"
  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<IEmployee[]> {
    return  this.httpClient.get<IEmployee[]>(this.API_URL_EMPLOYEE)
  }
  findById(id: number): Observable<IEmployee>{
    return this.httpClient.get<IEmployee>(this.API_URL_EMPLOYEE+"/"+id);
  }
  create(employee):Observable<IEmployee>{
    return this.httpClient.post<IEmployee>(this.API_URL_EMPLOYEE,employee);
  }
  edit(id: number,employee:IEmployee):Observable<IEmployee>{
    return this.httpClient.put<IEmployee>(this.API_URL_EMPLOYEE+"/"+id,employee);
  }
  delete(id:number):Observable<IEmployee>{
    return this.httpClient.delete<IEmployee>(this.API_URL_EMPLOYEE+"/"+id);
  }
  searchByName(name): Observable<IEmployee[]>{
    return this.httpClient.get<IEmployee[]>(this.API_URL_EMPLOYEE+"?nameEmployee_like="+name)
  }
}
