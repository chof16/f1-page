import { Component, OnInit } from '@angular/core';
import { SeasonService } from '../Services/season.service';
import { Season } from '../Model/Season';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.less']
})

export class SeasonsComponent implements OnInit {

  allSeasons!: Season[]

  constructor(private seasonsService: SeasonService) { }

  ngOnInit(): void {
    this.seasonsService.getAllSeasons().subscribe(data => {
      if (data.MRData.SeasonTable != undefined)
        this.allSeasons = data.MRData.SeasonTable?.Seasons

    })

  }



}

