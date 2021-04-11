import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomeComponent } from './home/home.component';
import { ChartBarComponent } from './chart-bar/chart-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { UserMapComponent } from './user-map/user-map.component';
import { Chart } from 'chart.js';
import { CardComponent } from 'src/modules/app-common/components/card/card.component';
import { ChartAreaComponent } from './chart-area/chart-area.component';
import { CardViewDetailsComponent } from 'src/modules/app-common/components/card-view-details/card-view-details.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HomeComponent,
    ChartBarComponent,
    TopBarComponent,
    DashboardComponent,
    FooterComponent,
    UserMapComponent,
    CardComponent,
    ChartAreaComponent,
    CardViewDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    // Chart
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
