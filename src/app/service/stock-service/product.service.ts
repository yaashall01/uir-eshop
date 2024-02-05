import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/Stock-modules/product.module';
import { Stock } from 'src/app/models/Stock-modules/stock.module';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }


  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${environment.urlApiT}/products/`);
  }

  getProductStocks(productId:number):Observable<Stock[]>{
      return this.http.get<Stock[]>(`${environment.urlApiT}/products/${productId}/stocks/`)
  }

  getProductById(id:number):Observable<Product>{
    return this.http.get<Product>(`${environment.urlApiT}/products/id/${id}`);
  }

  updateProduct(product:Product):Observable<Product>{
    return this.http.put<Product>(`${environment.urlApiT}/products/`,product);
  }

  deleteProduct(id:number):Observable<void>{
    return this.http.delete<void>(`${environment.urlApiT}/products/id/${id}`);
  }
}