import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ProfileComponent } from './portfolio/profile/profile.component';
import {AuthGuard} from './auth/auth.guard';
import { LoginComponent } from './portfolio/login/login.component';
import { AboutComponent } from './portfolio/about/about.component';
import { SkillsComponent } from './portfolio/skills/skills.component';
import { ResumeComponent } from './portfolio/resume/resume.component';
import { ContactComponent } from './portfolio/contact/contact.component'



const routes: Routes = [
{path:'',component:ProfileComponent},
{ path:'profile', component: ProfileComponent}, 
{ path: 'temperature', component: BarChartComponent },
{ path: 'smoke', component: BarChartComponent },
{ path: 'gas', component: BarChartComponent },
{ path: 'motion', component: BarChartComponent },
{path:'login', component:LoginComponent},
{path:'about', component:AboutComponent},
{path:'skill', component:SkillsComponent},
{path:'resume', component:ResumeComponent},
{path:'contact', component:ContactComponent},
  // { path:'profile', component: ProfileComponent, canActivate:[AuthGuard]}
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
