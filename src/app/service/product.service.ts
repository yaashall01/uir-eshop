import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProductService {
  getProducts() {
    throw new Error('Method not implemented.');
  }

    
  constructor( private http: HttpClient ) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.urlApiP);
  }

  get(id: number): Observable<Product> {
    return this.http.get<Product>(`${environment.urlApiP}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post<any>(environment.urlApiP, data);
  }

  update(id: number, data: Product): Observable<Product> {
    return this.http.put<Product>(`${environment.urlApiP}/${id}`, data);
  }

  delete(id: number): Observable<Product> {
    return this.http.delete<Product>(`${environment.urlApiP}/${id}`);
  }

}