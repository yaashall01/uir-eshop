import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Supplier } from '../models/supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  constructor(private http:HttpClient) { }

  getSupplier(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(environment.urlApiS);
  }


   createSupplier(data:Supplier):Observable<Supplier> {
    return this.http.post<Supplier>(environment.urlApiS,data);
  }

  deleteSupplier(id: number){
    return this.http.delete<any>(`${environment.urlApiS}/${id}`);
  }

  updateSupplier(id: number, data: Supplier): Observable<Supplier> {
    console.log("ff",data)
    return this.http.put<Supplier>(`${environment.urlApiS}/${id}`, data);
    
  }




  
 
}