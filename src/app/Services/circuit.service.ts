import { Injectable } from '@angular/core';
import { Data } from '../Model/Driver';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CircuitService {



  constructor(private http: HttpClient) { }

  private url_circuits = "https://ergast.com/api/f1/circuits"

  getAllCircutis() {
    return this.http.get<Data>(this.url_circuits + ".json?limit=90")
  }

  getCircuitDetails(id: string) {
    return this.http.get<Data>(this.url_circuits + "/" + id + "/results/1.json?limit=1")
  }

  getLastWinners(id:string, total:number) {
    let offset = String(total-3)
    return this.http.get<Data>(this.url_circuits + "/" + id + "/results/1.json?offset="+offset)
    
  }


}
