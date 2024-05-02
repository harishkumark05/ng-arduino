
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { SocketService } from './service/socket.service';
import {NodeDataService} from './service/node-data.service';
import {PersonalDataService} from './service/personal-data.service';
import { AuthService} from  './auth/auth.service';


import { AppComponent } from './app.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CapitalPipe } from './pipes/capital.pipe';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LoginComponent } from './portfolio/login/login.component';
import { ProfileComponent } from './portfolio/profile/profile.component';
import { AboutComponent } from './portfolio/about/about.component';
import { SkillsComponent } from './portfolio/skills/skills.component';
import { ResumeComponent } from './portfolio/resume/resume.component';
import { ContactComponent } from './portfolio/contact/contact.component';
import { MainComponent } from './portfolio/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    DashboardComponent,
    CapitalPipe,
    BarChartComponent,
    LoginComponent,
    ProfileComponent,
    AboutComponent,
    SkillsComponent,
    ResumeComponent,
    ContactComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [
    SocketService,
    NodeDataService,
    PersonalDataService,
    AuthService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
