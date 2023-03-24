import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { IconsProviderModule } from './icons-provider.module';
import { BusServiceSectionComponent } from './components/bus-service-section/bus-service-section.component';
import { BusServiceListComponent } from './components/bus-service-list/bus-service-list.component';
import { BusServiceComponent } from './components/bus-service/bus-service.component';
import { BusServiceFormComponent } from './components/bus-service-form/bus-service-form.component';
import { BusServiceAPIService } from './services/bus-service-api.service';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { RouteFormComponent } from './components/route-form/route-form.component';
import { RouteListComponent } from './components/route-list/route-list.component';
import { RouteSectionComponent } from './components/route-section/route-section.component';
import { RouteApiService } from './services/route-api.service';
import { RouteComponent } from './components/route/route.component';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { BusServiceDashboardComponent } from './components/bus-service-dashboard/bus-service-dashboard.component';
import { ScheduleSectionComponent } from './components/schedule-section/schedule-section.component';
import { ScheduleFormComponent } from './components/schedule-form/schedule-form.component';
import { ScheduleApiService } from './services/schedule-api.service';
import { BusApiService } from './services/bus-api.service';
import { ScheduleListComponent } from './components/schedule-list/schedule-list.component';
import { ScheduleComponent } from './components/schedule/schedule.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    LandingPageComponent,
    BusServiceSectionComponent,
    BusServiceListComponent,
    BusServiceComponent,
    BusServiceFormComponent,
    RouteFormComponent,
    RouteListComponent,
    RouteSectionComponent,
    RouteComponent,
    BusServiceDashboardComponent,
    ScheduleSectionComponent,
    ScheduleFormComponent,
    ScheduleListComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzMenuModule,
    IconsProviderModule,
    NzCardModule,
    NzTimelineModule,
    NzInputModule,
    NzButtonModule,
    NzGridModule 
  ],
  providers: [
    BusServiceAPIService,
    NzDrawerService,
    NzNotificationService,
    RouteApiService,
    ScheduleApiService,
    BusApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
