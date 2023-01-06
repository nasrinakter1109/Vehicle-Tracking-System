import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StartupComponent } from './startup/startup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Layout1Component } from '../layout/layout-1/layout-1.component';
import { VehicleEntryComponent } from './vehicle-entry/vehicle-entry.component';
import { VehicleLocationComponent } from './vehicle-location/vehicle-location.component';
import { VehicleRegistrationListComponent } from './vehicle-registration-list/vehicle-registration-list.component';
import { LocationAllVehicleComponent } from './location-all-vehicle/location-all-vehicle.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PageGuard } from '../guards/page.guard';




@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: StartupComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path:'vehicle-entry', canActivate:[PageGuard],data:{pageId:1} ,component: VehicleEntryComponent },
    { path:'vehicle-registratin-list',canActivate:[PageGuard],data:{pageId:5} , component: VehicleRegistrationListComponent },
    { path:'vehicle-location-for-user', canActivate:[PageGuard],data:{pageId:2} ,component: VehicleLocationComponent },
    { path:'vehicle-location-for-admin', canActivate:[PageGuard],data:{pageId:3}, component: LocationAllVehicleComponent },
    { path:'change-password', canActivate:[PageGuard],data:{pageId:6}, component: ChangePasswordComponent }

  ])],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
