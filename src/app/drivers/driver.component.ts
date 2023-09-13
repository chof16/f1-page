import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DriversService } from '../Services/drivers.service';
import { Driver } from '../Model/Driver';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.less'],
  imports: [MatPaginatorModule, MatTableModule, MatSortModule,RouterModule]

})
export class DriversComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['givenName', 'familyName', 'nationality', 'dateOfBirth', "moreInfo"];
  dataSource = new MatTableDataSource<Driver>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private driversService: DriversService) { }
  
  
  ngOnInit(): void {
    this.driversService.getAllDrivers().subscribe(drivers => {
      if (drivers.MRData.DriverTable != undefined)
        this.dataSource.data = drivers.MRData.DriverTable.Drivers
    })
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


}

