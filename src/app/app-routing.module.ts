import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DriversComponent } from './drivers/driver.component';
import { DriverComponent } from './driver-component/driver-component.component';
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "drivers", component: DriversComponent},
  { path: "drivers/:id", component: DriverComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }