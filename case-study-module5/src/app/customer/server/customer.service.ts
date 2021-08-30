import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICustomer} from '../../model/i-customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
   API_URL_CUSTOMER = "http://localhost:3000/customerList"
  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<ICustomer[]> {
   return  this.httpClient.get<ICustomer[]>(this.API_URL_CUSTOMER)
  }
  findById(id: number): Observable<ICustomer>{
    return this.httpClient.get<ICustomer>(this.API_URL_CUSTOMER+"/"+id);
  }
  create(customer):Observable<ICustomer>{
    return this.httpClient.post<ICustomer>(this.API_URL_CUSTOMER,customer);
  }
  edit(id: number,customer:ICustomer):Observable<ICustomer>{
    return this.httpClient.put<ICustomer>(this.API_URL_CUSTOMER+"/"+id,customer);
  }
  delete(id:number):Observable<ICustomer>{
    return this.httpClient.delete<ICustomer>(this.API_URL_CUSTOMER+"/"+id);
  }
}

