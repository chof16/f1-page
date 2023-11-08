import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { DriverStanding, ConstructorStanding } from '../Model/Standings';
import { StandingsService } from '../Services/standings.service';
import { SeasonService } from '../Services/season.service';
import { Race } from '../Model/DriverQualyFying';
import { forkJoin } from 'rxjs';
import { Circuit } from '../Model/Circuit';

@Component({
  selector: 'app-season-detail',
  templateUrl: './season-detail.component.html',
  styleUrls: ['./season-detail.component.less']
})
export class SeasonDetailComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'points'];
  dataSource = new MatTableDataSource<DriverStanding>();

  dataSource2 = new MatTableDataSource<ConstructorStanding>();

  id: string = "";
  scheudle: Race[] | undefined;

  constructor(private route: ActivatedRoute, private standingsService: StandingsService, private seasonService: SeasonService) { }

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'))
    if (this.id > "1957") {
      forkJoin([this.standingsService.getHistoricalStandingsPilots(this.id), this.seasonService.getHistoricalSeasonCircuits(this.id)
        , this.standingsService.getHistroricalStandingsConstructor(this.id)])
        .subscribe(data => {
          this.dataSource.data = data[0].MRData.StandingsTable!.StandingsLists[0].DriverStandings!
          this.scheudle = data[1].MRData.RaceTable?.Races
          this.dataSource2.data = data[2].MRData.StandingsTable!.StandingsLists[0].ConstructorStandings!
        })
    }
    else {
      forkJoin([this.standingsService.getHistoricalStandingsPilots(this.id), this.seasonService.getHistoricalSeasonCircuits(this.id)])
        .subscribe(data => {
          this.dataSource.data = data[0].MRData.StandingsTable!.StandingsLists[0].DriverStandings!
          this.scheudle = data[1].MRData.RaceTable?.Races

        })
    }

  }

}
