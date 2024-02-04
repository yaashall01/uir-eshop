import { Injectable } from '@angular/core';
import { Delivery } from '../models/delivery';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

 
  constructor(private http:HttpClient) { }

  getdelivery(): Observable<Delivery[]> {
    return this.http.get<Delivery[]>(environment.urlApiD);
  }
  public create(data:Delivery):Observable<Delivery> {
    return this.http.post<Delivery>(environment.urlApiD,data);
  }

  delete(id: number){
    return this.http.delete<any>(`${environment.urlApiD}/${id}`);
  }

  update(id: number, data: Delivery): Observable<Delivery> {
    return this.http.put<Delivery>(`${environment.urlApiD}/${id}`, data);
  }



}
