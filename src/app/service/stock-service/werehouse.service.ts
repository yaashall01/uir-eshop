import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Warehouse } from 'src/app/models/Stock-modules/werehouse.module'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  constructor(private http : HttpClient) { }

  getAllWarhouses() : Observable<Warehouse[]>  {
    return this.http.get<Warehouse[]>(environment.urlApiT + '/warehouses/')
  }

  getWarehouseById(id : number) : Observable<Warehouse>  {
    return this.http.get<Warehouse>(environment.urlApiT + '/warehouses/id/' + id)
  }

  addNewWarehouse(warehouse : Warehouse) : Observable<Warehouse> {
    return this.http.post<Warehouse>(environment.urlApiT + '/warehouses/' , warehouse)
  }

  updateWarehouse(warehouse : Warehouse) : Observable<Warehouse> {
    return this.http.put<Warehouse>(environment.urlApiT + '/warehouses/' , warehouse )
  }

  deleteWarehouse(id : number) : Observable<void> {
    return this.http.delete<void>(environment.urlApiT + '/warehouses/id/' + id) 
  }
}