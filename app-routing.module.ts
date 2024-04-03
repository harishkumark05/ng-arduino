import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
{path:'',component:DashboardComponent},
{ path: 'temperature', component: BarChartComponent },
  { path: 'smoke', component: BarChartComponent },
  { path: 'gas', component: BarChartComponent },
  { path: 'motion', component: BarChartComponent },
  { path:'profile', component: ProfileComponent}
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
