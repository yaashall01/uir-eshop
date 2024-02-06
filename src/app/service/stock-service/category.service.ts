import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'src/app/models/Stock-modules/categotry.module';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient){}
  public getcategory(){
      return this.http.get(`${environment.urlApiT}/categories/`,{observe:"response"});
  }

  public Savecategory(category: Category) {
      return this.http.post<Category>(`${environment.urlApiT}/categories/`,category);
  }

  public Updatecategory(category: Category) {
      return this.http.put<Category>(`${environment.urlApiT}/categories/`,category);
  }
}