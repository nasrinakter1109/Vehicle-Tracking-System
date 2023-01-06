
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ChartsModule as Ng2ChartsModule } from 'ng2-charts/ng2-charts';
import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StartupComponent } from './startup/startup.component';
import { BlockUIModule } from 'ng-block-ui';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LaddaModule } from 'angular2-ladda';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { LayoutModule } from '../layout/layout.module';
import { VehicleEntryComponent } from './vehicle-entry/vehicle-entry.component';
import { VehicleLocationComponent } from './vehicle-location/vehicle-location.component';
import { VehicleRegistrationListComponent } from './vehicle-registration-list/vehicle-registration-list.component';
import { AgmCoreModule } from '@agm/core';
import { LocationAllVehicleComponent } from './location-all-vehicle/location-all-vehicle.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  imports: [
    
    
    CommonModule,
    FormsModule,
    NgbModule,
    Ng2ChartsModule,
    PerfectScrollbarModule,
    HomeRoutingModule,
    SweetAlert2Module,
    LaddaModule,
    BlockUIModule,
    NgSelectModule,
    NgxDatatableModule,
    LayoutModule,
    ReactiveFormsModule,
      //Map
      AgmCoreModule.forRoot({
        apiKey: 'AIzaSyBvSavpbuZ6TEpG1Rt6qvzSmhvf7A_0rxY',
        libraries: ['places']
      })
  ],
  declarations: [
    DashboardComponent,
    StartupComponent,
    VehicleEntryComponent,
    VehicleLocationComponent,
    VehicleRegistrationListComponent,
    LocationAllVehicleComponent,
    ChangePasswordComponent
  ]
})
export class HomeModule { }
