import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DriversComponent } from './drivers/driver.component';
import { DriverComponent } from './driver-component/driver-component.component';
import { SeasonDetailComponent } from './season-detail/season-detail.component';
import { SeasonsComponent } from './seasons/seasons.component';
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "drivers", component: DriversComponent},
  { path: "drivers/:id", component: DriverComponent},
  { path: "seasons", component: SeasonsComponent},
  { path: "seasons/:id", component: SeasonDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }