import { Component, OnInit } from '@angular/core';
import { DriversService } from '../Services/drivers.service';
import { ActivatedRoute } from '@angular/router';
import { Driver } from '../Model/Driver';

@Component({
  selector: 'app-driver-component',
  templateUrl: './driver-component.component.html',
  styleUrls: ['./driver-component.component.less']
})
export class DriverComponent implements OnInit {

  driver: Driver | undefined
  num_races !: number
  num_seasons !: number
  image_url: string | undefined
  num_poles: number | undefined;
  num_victories: number | undefined

  constructor(private route: ActivatedRoute,
    private driverService: DriversService) { }

  ngOnInit(): void {
    this.getPoles();
    this.getVictories();
    this.getDriver();
    this.getNumSeasons();
  }

  private getID(): string {
    return String(this.route.snapshot.paramMap.get('id'));
  }

  getDriver() {
    let id = this.getID();
    this.driverService.getDriver(id)
      .subscribe(data => {
        this.driver = data.MRData.DriverTable?.Drivers[0]
      },)
  }

  getVictories() {
    let id = this.getID();
    this.driverService.getAllRaceResults(id)
      .subscribe(dataCarrer => {
        this.num_victories = dataCarrer.MRData.RaceTable?.Races.flatMap(q => q.Results?.filter(a => a.position == "1")).length
        this.num_races = Number(dataCarrer.MRData.total)
      });
  }


  getPoles(): void {
    let id = this.getID();
    this.driverService.getAllQualyResults(id)
      .subscribe(dataQualys => this.num_poles = dataQualys.MRData.RaceTable?.Races.flatMap(q => q.QualifyingResults?.filter(a => a.position == "1")).length);
  }

  getNumSeasons() {
    let id = this.getID();
    this.driverService.getNumSeasons(id).
      subscribe(data => this.num_seasons = Number(data.MRData.total)
      )
  }

}

