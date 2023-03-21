import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { BusServiceSectionComponent } from './components/bus-service-section/bus-service-section.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RouteSectionComponent } from './components/route-section/route-section.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    children: [
      {
        path: 'busservice',
        component: BusServiceSectionComponent
      },
      {
        path: 'route',
        component: RouteSectionComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
