import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from 'src/app/models/Stock-modules/stock.module';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockService{

  constructor(private http:HttpClient) { }

  getStocks():Observable<any>{
    return this.http.get<any>(environment.urlApiT+'/stocks/');
  }

  getStockById(id : number) : Observable<Stock>  {
    return this.http.get<Stock>(environment.urlApiT + '/stocks/id/' + id)
  }

  editStock(stock : Stock) : Observable<any> {
    return this.http.put<any>(environment.urlApiT+'/stocks/', stock)
  } 

  deleteStock(id : number): Observable<any> {
    return this.http.delete<any>(environment.urlApiT+'/stocks/id/' + id) ;
  }
}