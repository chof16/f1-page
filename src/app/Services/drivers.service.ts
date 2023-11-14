import { Injectable } from '@angular/core';
import { Data } from '../Model/Driver';
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

  getPoles(id:string): Observable<Data> {
    return this.http.get<Data>(this.url_qualy+"/"+id+"/qualifying/1.json?limit=400");
  }

  getAllRaceResults(id: string) {
    return this.http.get<Data>(this.url_qualy+"/"+id+"/results.json?limit=400");
  }

  getVictories(id: string) {
    return this.http.get<Data>(this.url_qualy+"/"+id+"/results/1.json?limit=400");
  }

  getDriver(id:string) {
    return this.http.get<Data>(this.url_qualy+"/"+id+".json");
  }

  getNumSeasons(id:string) {
    return this.http.get<Data>(this.url_qualy+"/"+id+"/seasons.json");
  }


  getActualConstructor(id: string) {
    return this.http.get<Data>(environment.api+"2023/drivers/"+id+"/constructors.json");

  }

  getStatus(id: string) {
    return this.http.get<Data>(environment.api+"drivers/"+id+"/status.json?limit=400");

  }


  getPhoto(fullName: string) {
    return this.http.get<Image>("https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&prop=pageimages&titles="+fullName);
  }


}
