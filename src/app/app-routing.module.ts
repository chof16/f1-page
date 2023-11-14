import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DriversComponent } from './drivers/driver.component';
import { DriverComponent } from './driver-component/driver-component.component';
import { SeasonDetailComponent } from './season-detail/season-detail.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { CircuitsComponent } from './circuits/circuits.component';
import { CircuitDetailsComponent } from './circuit-details/circuit-details.component';
import { ConstructorsComponent } from './constructors/constructors.component';
import { ConstructorDetailComponent } from './constructor-detail/constructor-detail.component';
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "drivers", component: DriversComponent},
  { path: "drivers/:id", component: DriverComponent},
  { path: "seasons", component: SeasonsComponent},
  { path: "seasons/:id", component: SeasonDetailComponent},
  { path: "circuits", component: CircuitsComponent},
  { path: "circuits/:id", component: CircuitDetailsComponent},
  { path: "constructors", component: ConstructorsComponent},
  { path: "constructors/:id", component: ConstructorDetailComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }