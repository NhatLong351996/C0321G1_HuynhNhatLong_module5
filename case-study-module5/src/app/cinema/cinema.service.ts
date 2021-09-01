import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IEmployee} from '../model/i-employee';
import {Cinema} from '../model/cinema';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {
API_URL_CINEMA = "http://localhost:3000/listCinema"
  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Cinema[]> {
    return  this.httpClient.get<Cinema[]>(this.API_URL_CINEMA)
  }
  findById(id: number): Observable<Cinema>{
    return this.httpClient.get<Cinema>(this.API_URL_CINEMA+"/"+id);
  }
  create(cinema):Observable<Cinema>{
    return this.httpClient.post<Cinema>(this.API_URL_CINEMA,cinema);
  }
  edit(id: number,cinema:Cinema):Observable<Cinema>{
    return this.httpClient.put<Cinema>(this.API_URL_CINEMA+"/"+id,cinema);
  }
  delete(id:number):Observable<Cinema>{
    return this.httpClient.delete<Cinema>(this.API_URL_CINEMA+"/"+id);
  }
  searchByName(name): Observable<Cinema[]>{
    return this.httpClient.get<Cinema[]>(this.API_URL_CINEMA+"?nameFirm_like="+name)
  }
}
