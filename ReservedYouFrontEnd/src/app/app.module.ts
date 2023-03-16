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

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    LandingPageComponent,
    BusServiceSectionComponent,
    BusServiceListComponent,
    BusServiceComponent,
    BusServiceFormComponent
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
    IconsProviderModule
  ],
  providers: [
    BusServiceAPIService,
    NzDrawerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
