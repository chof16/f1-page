import { Injectable } from '@angular/core';
import { Data, Driver } from '../Model/Driver';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DriversService {

  url_drivers = "https://ergast.com/api/f1/drivers.json?limit=858";
  url_qualy = "https://ergast.com/api/f1/drivers"
  constructor(private http: HttpClient) { }

  getAllDrivers(): Observable<Data> {
    return this.http.get<Data>(this.url_drivers);
  }

  getAllQualyResults(id:string): Observable<Data> {
    return this.http.get<Data>(this.url_qualy+"/"+id+"/qualifying.json?limit=400");
  }

  getAllRaceResults(id: string) {
    return this.http.get<Data>(this.url_qualy+"/"+id+"/results.json?limit=400");
  }
}
