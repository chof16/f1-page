import { Injectable } from '@angular/core';
import { Data } from '../Model/Driver';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Image } from '../Model/Image';

@Injectable({
  providedIn: 'root'
})
export class CircuitService {

  constructor(private http: HttpClient) { }

  private url_circuits = environment.api + "circuits"

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

  getImage(circuit :string) {
    return this.http.get<Image>("https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&prop=pageimages&titles="+circuit)

  }


}
