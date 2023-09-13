import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ConstructorStanding, DriverStanding } from '../Model/Standings';
import { StandingsService } from '../Services/standings.service';
import { CircuitService } from '../Services/circuit.service';
import { Race } from '../Model/DriverQualyFying';
import { SeasonService } from '../Services/season.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  standalone: true,
  imports: [MatTableModule]
})


export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'points'];
  dataSource = new MatTableDataSource<DriverStanding>();

  dataSource2 = new MatTableDataSource<ConstructorStanding>();
  currentRace: Race | undefined

  constructor(private standingsService: StandingsService, private seasonService: SeasonService) { }

  ngOnInit(): void {
    this.standingsService.getCurrentStandingsPilots()
      .subscribe(data => {
        this.dataSource.data = data.MRData.StandingsTable!.StandingsLists[0].DriverStandings!
      })

    this.standingsService.getCurrentStandingsConstructor()
      .subscribe(data => this.dataSource2.data= data.MRData.StandingsTable!.StandingsLists[0].ConstructorStandings!)


    this.seasonService.getCurrentSeasonsCircuits()
      .subscribe(data => this.currentRace = data.MRData.RaceTable?.Races.find(r => isNext(r.date)))

  }
}

function isNext(date: Date): boolean {
  const datepipe: DatePipe = new DatePipe('en-US')
  let formattedDate = datepipe.transform(new Date(), 'YYYY-MM-dd')
  return date.toString() > formattedDate!

}

