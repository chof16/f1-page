import { Component, OnInit } from '@angular/core';
import { DriversService } from '../Services/drivers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-driver-component',
  templateUrl: './driver-component.component.html',
  styleUrls: ['./driver-component.component.less']
})
export class DriverComponent implements OnInit {

  num_poles:number | undefined;
  num_victories: number | undefined

  constructor(private route: ActivatedRoute,
    private driverService: DriversService){

    }
  ngOnInit(): void {
    this.getPoles();
    this.getVictories();
  }
  getVictories() {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.driverService.getAllRaceResults(id)
      .subscribe(dataCarrer => this.num_victories=dataCarrer.MRData.RaceTable?.Races.flatMap(q => q.Results?.filter(a => a.position=="1")).length);
  }

  
  getPoles(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.driverService.getAllQualyResults(id)
      .subscribe(dataQualys => this.num_poles=dataQualys.MRData.RaceTable?.Races.flatMap(q => q.QualifyingResults?.filter(a => a.position=="1")).length);
  }

}
