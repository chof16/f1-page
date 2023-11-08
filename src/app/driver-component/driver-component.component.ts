import { Component, OnInit, ViewChild } from '@angular/core';
import { DriversService } from '../Services/drivers.service';
import { ActivatedRoute } from '@angular/router';
import { Driver } from '../Model/Driver';
import { forkJoin } from 'rxjs';
import { Constructor } from '../Model/Constructor';
import { ChartComponent } from 'ng-apexcharts';
import { ChartOptions } from 'src/utils/chart';

@Component({
  selector: 'app-driver-component',
  templateUrl: './driver-component.component.html',
  styleUrls: ['./driver-component.component.less']
})


export class DriverComponent implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  driver: Driver | undefined
  fullName: string = ""
  srcImage: string = ""
  num_races !: number
  num_seasons !: number
  image_url: string | undefined
  num_poles: number | undefined;
  num_victories: number | undefined
  actual_constructor: Constructor | undefined

  constructor(private route: ActivatedRoute,
    private driverService: DriversService) {
    this.chartOptions = {
      series: [],
      labels : [],
      chart: {
        type: "donut",
        height : 500,
      }, stroke: {
        colors: ["#fff"]
      },
      fill: {
        opacity: 0.8
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: "100%"
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]

    }
  }

  ngOnInit(): void {
    this.getDriverInfo();
  }

  private getID(): string {
    return String(this.route.snapshot.paramMap.get('id'));
  }

  getDriverInfo() {
    let id = this.getID();
    forkJoin([this.driverService.getDriver(id), this.driverService.getVictories(id), this.driverService.getAllRaceResults(id),
    this.driverService.getPoles(id), this.driverService.getNumSeasons(id), this.driverService.getActualConstructor(id),this.driverService.getStatus(id)]).
      subscribe(data => {
        this.driver = data[0].MRData.DriverTable?.Drivers[0]
        this.fullName = data[0].MRData.DriverTable?.Drivers[0].givenName + "_" + data[0].MRData.DriverTable?.Drivers[0].familyName
        this.num_victories = Number(data[1].MRData.total)
        this.num_races = Number(data[2].MRData.total)
        this.num_poles = Number(data[3].MRData.total)
        this.num_seasons = Number(data[4].MRData.total)
        this.actual_constructor = data[5].MRData.ConstructorTable!.Constructors[0]
        this.chartOptions.series = data[6].MRData.StatusTable?.Status.map(status => Number(status.count))
        console.log(this.chartOptions.series )
        this.chartOptions.labels = data[6].MRData.StatusTable?.Status.map(status => status.status)
        this.getPhoto()
      })
  }

  getPhoto() {
    this.driverService.getPhoto(this.fullName)
      .subscribe(photo => {
        let profilePic = Object.values(photo.query.pages)[0].thumbnail.source
        let profilePics = profilePic.replaceAll('thumb/', '').split('/');
        profilePics.pop();
        this.srcImage = profilePics.join('/')
      });
  }

}

