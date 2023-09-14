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
import { SeasonsComponent } from './seasons/seasons.component';
import { SeasonDetailComponent } from './season-detail/season-detail.component';
import { DriversComponent } from './drivers/driver.component';
import { MatTableModule } from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import { CircuitsComponent } from './circuits/circuits.component';
import { CircuitDetailsComponent } from './circuit-details/circuit-details.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent,
    DriverComponent,
    SeasonsComponent,
    SeasonDetailComponent,
    CircuitsComponent,
    CircuitDetailsComponent,
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
    MatListModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule
    
  ],
  providers: [DriversService,ApiCacheInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
