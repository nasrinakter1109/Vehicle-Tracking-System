import { Component, OnInit,ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { Locations } from '../../models/locations';
import { VehicleService } from '../../services/vehicle.service';
import { VehicleRegistration } from '../../models/vehicle-registration.model';

@Component({
  selector: 'app-vehicle-location',
  templateUrl: './vehicle-location.component.html',
  styleUrls: ['./vehicle-location.component.scss','../../../vendor/libs/ng-select/ng-select.scss']
})
export class VehicleLocationComponent implements OnInit {


  title: string ;
  vehicleList:VehicleRegistration[]=[];
  devices:any[]=[];
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  deviceId:number;
  vehicleId:number;
  private geoCoder;  
  @ViewChild('search')
  public searchElementRef: ElementRef;
  constructor(
    private vehicleService:VehicleService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }
locations:Locations=new Locations();
  ngOnInit() {
    // this.getLocation();
    this.getVehicle();
    this.getDevice();
  }
  getVehicle(){
    this.vehicleService.getVehicle().subscribe((response:any)=>{
      if(response.status){
        this.vehicleList=response.result;
      }else{
        this.vehicleList=[];
      }
    })
  }
  getDevice(){
    this.vehicleService.getDevice().subscribe((response:any)=>{
      if(response.status){
        this.devices=response.result;
      }else{
        this.devices=[];
      }
    })
  }
  // getLocation(){
  //   this.vehicleService.getLocation().subscribe((response:any)=>{
  //     if(response.status){        
  //       this.locations=response.result;
  //     }
  //   })
  // }
  showMap(){
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;
    });
  }
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.latitude, this.longitude);
        this.saveLocation(this.latitude, this.longitude);
      });
    }
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
    
    });
  }
  saveLocation(latitude,longitude){
    let location=new Locations();
    location.latitude=latitude;
    location.longitude=longitude;
    location.location=this.address;
    location.vehicleID=this.vehicleId;
    location.deviceID=this.deviceId;
    console.log(location);
    this.vehicleService.saveVehicleLocation(location).subscribe((response:any)=>{
      if(response.status){

      }
    })
  }
}
