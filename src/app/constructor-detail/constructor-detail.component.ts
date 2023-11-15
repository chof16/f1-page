import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Driver, DriverTable } from '../Model/Driver';
import { Constructor } from '../Model/Constructor';
import { ConstructorsService } from '../Services/constructors.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-constructor-detail',
  templateUrl: './constructor-detail.component.html',
  styleUrls: ['./constructor-detail.component.less'],
})
export class ConstructorDetailComponent {

  constructorSelected: Constructor | undefined
  name: string = ""
  srcImage: string = ""
  num_points !: number
  num_races !: number
  num_seasons!: number
  num_victories !: number
  image_url: string | undefined
  numChampionships: number | undefined;
  actual_drivers: DriverTable | undefined
  drivers: Driver[]=[]


  constructor(private route: ActivatedRoute, private constructorsService: ConstructorsService) { }

  ngOnInit(): void {
    this.getConstructorInfo();
  }

  private getID(): string {
    return String(this.route.snapshot.paramMap.get('id'));
  }

  getConstructorInfo() {
    let id = this.getID();
    forkJoin([this.constructorsService.getConstructor(id), this.constructorsService.getDrivers(id), this.constructorsService.getVictories(id), this.constructorsService.getResults(id), this.constructorsService.getChamponships(id),this.constructorsService.getNumSeasons(id), this.constructorsService.getRaces(id),this.constructorsService.getAllDrivers(id)]).
      subscribe(data => {
        this.constructorSelected = data[0].MRData.ConstructorTable?.Constructors[0]
        console.log(this.constructorSelected)
        this.name=this.constructorSelected!.name
        this.actual_drivers = data[1].MRData.DriverTable
        console.log(data[3])
        this.num_victories = Number(data[2].MRData.total)
        let total = data[3].MRData.StandingsTable?.StandingsLists.map(season => Number(season.ConstructorStandings![0].points))
        total?.forEach(points => this.num_points += points)
        this.numChampionships = Number(data[4].MRData.total)
        this.num_seasons = Number(data[5].MRData.total)
        this.num_races = Number(data[6].MRData.total)
        this.drivers = data[7].MRData.DriverTable!.Drivers!
        this.getPhoto()
      })
  }

  getPhoto() {
    this.constructorsService.getPhoto(this.name)
      .subscribe(photo => {
        let profilePic = Object.values(photo.query.pages)[0].thumbnail.source
        let profilePics = profilePic.replaceAll('thumb/', '').split('/');
        profilePics.pop();
        this.srcImage = profilePics.join('/')
      });
  }

}

