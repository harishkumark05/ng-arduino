import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { SocketService } from './service/socket.service';
import {NodeDataService} from './service/node-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CapitalPipe } from './pipes/capital.pipe';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    DashboardComponent,
    CapitalPipe,
    BarChartComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    HttpClientModule
  ],
  providers: [
    SocketService,
    NodeDataService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
