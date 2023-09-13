import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '../Model/Driver';

@Injectable({
  providedIn: 'root'
})
export class SeasonService {

  constructor(private http:HttpClient) { }

  url_seasons="https://ergast.com/api/f1/seasons.json?limit=74"
  url_scheudle = "https://ergast.com/api/f1/current.json"
  url_historical= "https://ergast.com/api/f1/"


  getAllSeasons(){
    return this.http.get<Data>(this.url_seasons)
  }

  getCurrentSeasonsCircuits() {
    return this.http.get<Data>(this.url_scheudle);
  }

  getHistoricalSeasonCircuits(id:string) {
    return this.http.get<Data>(this.url_historical+id+".json");
  }
}
