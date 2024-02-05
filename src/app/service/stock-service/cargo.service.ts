import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cargo } from 'src/app/models/Stock-modules/cargo.module';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CargoService {
  constructor(private http:HttpClient) { }

  newCargo(cargo:Cargo):Observable<void>{
      console.log("sending")
    return this.http.post<void>(`${environment.urlApiT}/products/cargo-arrived`,cargo);
  }
}