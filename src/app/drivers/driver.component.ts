import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DriversService } from '../Services/drivers.service';
import { Driver } from '../Model/Driver';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@Component({
  standalone: true,
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.less'],
  imports: [MatIconModule,MatPaginatorModule, MatTableModule, MatSortModule, RouterModule, MatFormFieldModule, MatInputModule,MatButtonModule]

})
export class DriversComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['givenName', 'familyName', 'nationality', "moreInfo"];
  dataSource = new MatTableDataSource<Driver>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  show=false;

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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


