import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PackageModel} from "../../models/Stock-modules/package.module";
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class PackageService {

    constructor(private http: HttpClient) {
    }

    fetchPackages(): Observable<PackageModel[]> {
        return this.http.get<PackageModel[]>(`${environment.urlApiT}/package`);
    }

    deletePackage(packageId: number): Observable<void> {
        return this.http.delete<void>(`${environment.urlApiT}/package/${packageId}`);
    }

    preparePackage(packageId: number): Observable<void> {
        return this.http.post<void>(`${environment.urlApiT}/package/prepare/${packageId}`,{});
    }

    exportPackage(packageId: number): Observable<void> {
        return this.http.post<void>(`${environment.urlApiT}/package/export/${packageId}`,{});
    }
}