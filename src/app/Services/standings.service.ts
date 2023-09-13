import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '../Model/Driver';


@Injectable({
  providedIn: 'root'
})
export class StandingsService {


  url_pilots = "https://ergast.com/api/f1/current/driverStandings.json"
  url_constructor = "https://ergast.com/api/f1/current/constructorStandings.json"
  url ="https://ergast.com/api/f1/"
  finsish_pilots="/driverStandings.json"
  finsish_constructors="/constructorStandings.json"

  constructor(private http:HttpClient) { }

  getCurrentStandingsPilots() {
    return this.http.get<Data>(this.url_pilots);
  }

  getCurrentStandingsConstructor() {
    return this.http.get<Data>(this.url_constructor);
  }

  getHistoricalStandingsPilots(arg0: string) {
    return this.http.get<Data>(this.url+arg0+this.finsish_pilots);

  }

  getHistroricalStandingsConstructor(arg0: string) {
    return this.http.get<Data>(this.url+arg0+this.finsish_constructors);

  }

}
