import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Data } from '../Model/Driver';
import { Observable } from 'rxjs';
import { Image } from '../Model/Image';


@Injectable({
  providedIn: 'root'
})
export class ConstructorsService {


  url_constructor = environment.api + "constructors.json?limit=211";
  url_drivers = environment.api_actual + "constructors/";

  constructor(private http: HttpClient) { }


  getPhoto(name: string) {
    return this.http.get<Image>("https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&prop=pageimages&titles=" + name);

  }
  getResults(id: string): Observable<Data> {
    return this.http.get<Data>(environment.api + "constructors/" + id + "/constructorStandings.json");

  }

  getRaces(id: string): Observable<Data> {
    return this.http.get<Data>(environment.api + "constructors/" + id + "/results.json");

  }
  getAllDrivers(id: string): Observable<Data> {
    return this.http.get<Data>(`${environment.api}constructors/${id}/drivers.json?limit=97`);
  }

  getDrivers(id: string): Observable<Data> {
    return this.http.get<Data>(this.url_drivers + id + "/drivers.json");

  }

  getConstructor(id: string): Observable<Data> {
    return this.http.get<Data>(environment.api + "constructors/" + id + ".json");

  }

  getAllConstructors(): Observable<Data> {
    return this.http.get<Data>(this.url_constructor);
  }

  getChamponships(id: string): Observable<Data> {
    return this.http.get<Data>(environment.api + "constructors/" + id + "/constructorStandings/1.json");

  }

  getVictories(id: string): Observable<Data> {
    return this.http.get<Data>(environment.api + "constructors/" + id + "/results/1.json");

  }

  getNumSeasons(id: string): Observable<Data> {
    return this.http.get<Data>(environment.api + "constructors/" + id + "/seasons.json");
  }

}
