import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DriversService } from './Services/drivers.service';
import { DriverComponent } from './driver-component/driver-component.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ApiCacheInterceptor } from './api-cache-interceptor';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { NavComponent } from './nav/nav.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { SeasonDetailComponent } from './season-detail/season-detail.component';
import { DriversComponent } from './drivers/driver.component';
import { MatTableModule } from '@angular/material/table';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    DriverComponent,
    NavComponent,
    SeasonsComponent,
    SeasonDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule,
    MatCardModule,
    MatDividerModule,
    HomeComponent,
    DriversComponent,
    MatTableModule,
    MatListModule
  ],
  providers: [DriversService,ApiCacheInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
