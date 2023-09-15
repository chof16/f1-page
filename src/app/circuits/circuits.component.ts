import { Component, OnInit } from '@angular/core';
import { CircuitService } from '../Services/circuit.service';
import { MatTableDataSource } from '@angular/material/table';
import { Circuit } from '../Model/Circuit';

@Component({
  selector: 'app-circuits',
  templateUrl: './circuits.component.html',
  styleUrls: ['./circuits.component.less']
})
export class CircuitsComponent implements OnInit {

  displayedColumns: string[] = ['grandprix', 'location', 'country', "moreInfo"];
  dataSource = new MatTableDataSource<Circuit>();



  constructor(private circuitService:CircuitService){}

  
  ngOnInit(): void {
    this.circuitService.getAllCircutis().subscribe(data => {this.dataSource.data=data.MRData.CircuitTable?.Circuits!
    })
  }



}
