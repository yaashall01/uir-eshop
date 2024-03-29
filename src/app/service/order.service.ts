import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from'src/environments/environment';
import { mapCommandDto, mapCommandDtos, Order } from '../models/orders';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }
  
  
  getAll(): Observable<Order[]> {
    return this.http.get<Order[]>(environment.urlApiO);
  }
  
  update(id: number, order: Order): Observable<Order> {
    console.log(id, order);
    return this.http.put<Order>(`${environment.urlApiO}/${id}`, order);
  }
  
  assignDelivery(idDelivery: number, idOrder: number): Observable<Order> {
    return this.http.put<Order>(`${environment.urlApiO}/${idDelivery}/${idOrder}`, null);
  }
  
  
  delete(id: number): Observable<Order> {
    return this.http.delete<Order>(
      `${environment.urlApiO}/${id}`
    );
  }
}
