import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '../Model/Driver';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class StandingsService {


  url_pilots = environment.api + "current/driverStandings.json"
  url_constructor = environment.api + "current/constructorStandings.json"
  finish_pilots="/driverStandings.json"
  finsish_constructors="/constructorStandings.json"

  constructor(private http:HttpClient) { }

  getCurrentStandingsPilots() {
    return this.http.get<Data>(this.url_pilots);
  }

  getCurrentStandingsConstructor() {
    return this.http.get<Data>(this.url_constructor);
  }

  getHistoricalStandingsPilots(id: string) {
    return this.http.get<Data>(environment.api+id+this.finish_pilots);

  }

  getHistroricalStandingsConstructor(id: string) {
    return this.http.get<Data>(environment.api+id+this.finsish_constructors);

  }

}
