import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { DriverStanding, ConstructorStanding } from '../Model/Standings';
import { StandingsService } from '../Services/standings.service';
import { SeasonService } from '../Services/season.service';
import { Race } from '../Model/DriverQualyFying';

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
  isLoading=true;
  scheudle: Race[] | undefined;

  constructor(private route: ActivatedRoute, private standingsService: StandingsService,private seasonService: SeasonService) { }

  private getID() {
    this.id = String(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    let id = this.getID()
    this.standingsService.getHistoricalStandingsPilots(this.id)
      .subscribe(data => {
        this.dataSource.data = data.MRData.StandingsTable!.StandingsLists[0].DriverStandings!
        this.isLoading = false;
      })

      this.seasonService.getHistoricalSeasonCircuits(this.id)
      .subscribe(data => this.scheudle = data.MRData.RaceTable?.Races)

    if (this.id > "1957")
      this.standingsService.getHistroricalStandingsConstructor(this.id)
        .subscribe(data => {this.dataSource2.data = data.MRData.StandingsTable!.StandingsLists[0].ConstructorStandings!
          this.isLoading = false;
        })


  }

}
