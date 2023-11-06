import { Injectable } from '@angular/core';
import { Data, Driver } from '../Model/Driver';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Image } from '../Model/Image';


@Injectable({
  providedIn: 'root'
})
export class DriversService {


  url_drivers = environment.api + "drivers.json?limit=858";
  url_qualy = environment.api + "drivers"
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

  getDriver(id:string) {
    return this.http.get<Data>(this.url_qualy+"/"+id+".json");
  }

  getNumSeasons(id:string) {
    return this.http.get<Data>(this.url_qualy+"/"+id+"/seasons.json");
  }

  getPhoto(fullName: string) {
    return this.http.get<Image>("https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&prop=pageimages&titles="+fullName);
  }

}
