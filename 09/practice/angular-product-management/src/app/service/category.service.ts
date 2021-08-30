import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  API_URL_CATEGORY = 'http://localhost:3000/categoryList';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.API_URL_CATEGORY);
  }

  saveCategory(category): Observable<Category> {
    return this.http.post<Category>(this.API_URL_CATEGORY, category);
  }

  findById(id: number): Observable<Category> {
    return this.http.get<Category>(this.API_URL_CATEGORY + '/' + id);
  }

  updateCategory(id: number, category: Category): Observable<Category> {
    return this.http.put<Category>(this.API_URL_CATEGORY + '/' + id, category);
  }

  deleteCategory(id: number): Observable<Category> {
    return this.http.delete<Category>(this.API_URL_CATEGORY + '/' + id);
  }
}
