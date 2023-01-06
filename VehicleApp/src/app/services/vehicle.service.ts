import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Locations } from '../models/locations';
import { VehicleRegistration } from '../models/vehicle-registration.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(
    private http:HttpClient

  ) { }
  //Change Password
  changePassword(loginId:string, oldPassword:string, newPassword:string){
    return this.http.post(environment.apiUrl+'/user/changePassword',
    {loginId:loginId, oldPassword:oldPassword, newPassword:newPassword}
    )
  }
  saveVehicle(vehicle:VehicleRegistration){
    return this.http.post(environment.apiUrl+"/vehicle/saveVehicle",vehicle);
  }
  getVehicle(){
    return this.http.get(environment.apiUrl+"/vehicle/getVehicle");
  }
  getDevice(){
    return this.http.get(environment.apiUrl+"/vehicle/getDevice");
  }
  getLocation(){
    return this.http.get(environment.apiUrl+"/vehicle/getGeoLocation");
  }
  getVehicleLocation(){
    return this.http.get(environment.apiUrl+"/vehicle/getVehicleLocation");
  }

  saveVehicleLocation(location:Locations){
    return this.http.post(environment.apiUrl+"/vehicle/saveVehicleLocation",location);
  }
}
