import { Component, OnInit } from '@angular/core';
import { VehicleRegistration } from '../../models/vehicle-registration.model';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-vehicle-registration-list',
  templateUrl: './vehicle-registration-list.component.html',
  styleUrls: ['./vehicle-registration-list.component.scss']
})
export class VehicleRegistrationListComponent implements OnInit {

  constructor(
    private vehicleService:VehicleService
  ) { }
  vehicleList:VehicleRegistration[]=[];
  filterVehicle:VehicleRegistration[]=[];
  isLoading:boolean=false;
  ngOnInit() {
    this.getVehicle();
  }
  getVehicle(){
    this.vehicleService.getVehicle().subscribe((response:any)=>{
      if(response.status){
        this.vehicleList=response.result;
        this.filterVehicle=response.result;
      }else{
        this.filterVehicle=[];
      }
    })
  }
  search(event) {
    if (event.target.value && event.target.value != '') {
      this.filterVehicle = this.vehicleList.filter(veh =>
        this.isNull(veh.vehicleName).toLowerCase().match(event.target.value.toLowerCase()) ||
        this.isNull(veh.registrationNo).toLowerCase().match(event.target.value.toLowerCase())
      )
     
    } else {
      this.filterVehicle = this.vehicleList;
    }

  }
  isNull(value) {
    return value ? value : '';
  }
}
