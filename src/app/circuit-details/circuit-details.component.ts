import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Circuit } from '../Model/Circuit';
import { CircuitService } from '../Services/circuit.service';
import { Race } from '../Model/DriverQualyFying';
import { concatMap, mergeMap } from 'rxjs';
import { Data } from '../Model/Driver';

@Component({
  selector: 'app-circuit-details',
  templateUrl: './circuit-details.component.html',
  styleUrls: ['./circuit-details.component.less']
})
export class CircuitDetailsComponent implements OnInit {

  circuit: Circuit | undefined
  gp_totales!: number
  firstSeason!: number
  lastWinners: Race[] = []
  imageCircuit: string = ""



  constructor(private route: ActivatedRoute, private circuitService: CircuitService) { }

  ngOnInit(): void {
    this.getDetails()
  }

  private getID(): string {
    return String(this.route.snapshot.paramMap.get('id'));
  }

  getDetails() {
    let id = this.getID()
    this.circuitService.getCircuitDetails(id).pipe(
      concatMap((data) => {
        this.circuit = data.MRData.RaceTable?.Races[0].Circuit
        this.gp_totales = Number(data.MRData.total)
        this.firstSeason = Number(data.MRData.RaceTable?.Races[0].season)
        let url = data.MRData.RaceTable!.Races[0].Circuit.url.split("/").pop()
        this.circuitService.getImage(url!).subscribe(photo => {
          let circuitPic = Object.values(photo.query.pages)[0].thumbnail.source
          let circuitPics = circuitPic.replaceAll('thumb/', '').split('/');
          circuitPics.pop();
          this.imageCircuit = circuitPics.join('/')

        })
        return this.circuitService.getLastWinners(id, this.gp_totales)
      })).subscribe(data => {
        this.lastWinners.push(data.MRData.RaceTable!.Races![0])
        this.lastWinners.push(data.MRData.RaceTable!.Races![1])
        this.lastWinners.push(data.MRData.RaceTable!.Races![2])
      })
  }

}
