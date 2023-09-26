import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '../Model/Driver';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeasonService {

  constructor(private http:HttpClient) { }

  url_seasons= environment.api + "seasons.json?limit=74"
  url_scheudle = environment.api + "current.json"


  getAllSeasons(){
    return this.http.get<Data>(this.url_seasons)
  }

  getCurrentSeasonsCircuits() {
    return this.http.get<Data>(this.url_scheudle);
  }

  getHistoricalSeasonCircuits(id:string) {
    return this.http.get<Data>(environment.api+id+".json");
  }
}
