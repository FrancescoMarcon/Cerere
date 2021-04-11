import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { HomeComponent } from './home/home.component';
import { ChartBarComponent } from './chart-bar/chart-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserMapComponent } from './user-map/user-map.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'homepage', component:HomeComponent },
  { path: 'chart', component:ChartBarComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user-map', component: UserMapComponent}

//   {
//     path: 'dashboard',
//     loadChildren: () =>
//         import('../modules/dashboard/dashboard-routing.module').then(
//             m => m.DashboardRoutingModule
//         ),
// },
// {
//   path: 'charts',
//   loadChildren: () =>
//       import('../modules/charts/charts-routing.module').then(m => m.ChartsRoutingModule),
// },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
