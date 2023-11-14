import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Constructor } from '../Model/Constructor';
import { ConstructorsService } from '../Services/constructors.service';


@Component({
  standalone: true,
  selector: 'app-constructors',
  templateUrl: './constructors.component.html',
  styleUrls: ['./constructors.component.less'],
  imports: [MatIconModule,MatPaginatorModule, MatTableModule, MatSortModule, RouterModule, MatFormFieldModule, MatInputModule,MatButtonModule]
})

export class ConstructorsComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['name', 'nationality', "moreInfo"];
  dataSource = new MatTableDataSource<Constructor>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private constructorsService: ConstructorsService) { }


  ngOnInit(): void {
    this.constructorsService.getAllConstructors().subscribe(constructors => {
      if (constructors.MRData.ConstructorTable != undefined)
        this.dataSource.data = constructors.MRData.ConstructorTable.Constructors
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


