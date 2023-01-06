import { MapsAPILoader } from '@agm/core';
import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-location-all-vehicle',
  templateUrl: './location-all-vehicle.component.html',
  styleUrls: ['./location-all-vehicle.component.scss']
})
export class LocationAllVehicleComponent implements OnInit {

  constructor(  private vehicleService:VehicleService,
    private mapsAPILoader: MapsAPILoader,
    ) { }
  filterVehicleLocation:any[]=[];
  vehicleLocatioList:any[]=[];
  isLoading:boolean;
  isShowMap:boolean=false;
  private geoCoder;  
  zoom: number;
  address:string;
  latitude: number;
  longitude: number;
  ngOnInit() {
    this.getVehicleLocation();
  }
  getVehicleLocation(){
    this.vehicleService.getVehicleLocation().subscribe((response:any)=>{
      if(response.status){
        this.vehicleLocatioList=response.result;
        this.filterVehicleLocation=response.result;
      }else{
        this.filterVehicleLocation=[];
      }
    })
  }
  search(event) {
    if (event.target.value && event.target.value != '') {
      this.filterVehicleLocation = this.vehicleLocatioList.filter(veh =>
        this.isNull(veh.vehicleName).toLowerCase().match(event.target.value.toLowerCase()) ||
        this.isNull(veh.deviceName).toLowerCase().match(event.target.value.toLowerCase())
      )
     
    } else {
      this.filterVehicleLocation = this.vehicleLocatioList;
    }

  }
  isNull(value) {
    return value ? value : '';
  }
  showMap(event){
    this.isShowMap=true
    this.mapsAPILoader.load().then(() => {
      this.latitude=event.latitude;
      this.longitude=event.longitude;
      this.address=event.location;
      //this.getAddress(event.latitude,event.longitude);
      this.geoCoder = new google.maps.Geocoder;
    });
    // this.mapsAPILoader.load().then(() => {
    //   this.setCurrentLocation();
    //   this.geoCoder = new google.maps.Geocoder;
    // });
  }
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        // this.latitude = position.coords.latitude;
        // this.longitude = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.latitude, this.longitude);
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
}
