import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-vehicle-entry',
  templateUrl: './vehicle-entry.component.html',
  styleUrls: ['./vehicle-entry.component.scss']
})
export class VehicleEntryComponent implements OnInit {

  constructor(
    private formBuilder:FormBuilder,
    private vehicleService:VehicleService,
    private toasterService:ToastrService
  ) { }
    vehicleRegistrationFrom:FormGroup;
    isLoading:boolean=false;

  ngOnInit() {
    this.createForm();
  }
  saveVehicle(){
    this.isLoading=true;
    if(this.vehicleRegistrationFrom.invalid){
      this.toasterService.error("Please fill the all required fields","Invalid submission");
      return;
    }
    this.vehicleService.saveVehicle(this.vehicleRegistrationFrom.value).subscribe((response:any)=>{
      if(response.status){
        this.toasterService.success(response.massage,"Success!");
       }else{
        this.toasterService.success(response.massage,"Faild!")
      }
      this.reset();
    })
  }
  reset(){
    this.isLoading=false;
    this.vehicleRegistrationFrom.reset();
    this.createForm();
  }
  createForm(){
    this.vehicleRegistrationFrom=this.formBuilder.group({
      id:[0,[]],
      vehicleName:[,[Validators.required]], 
      registrationNo:[,[Validators.required]], 
      companyName:[,[]], 
      model:[,[]], 
      colour:[,[]], 
      ignitionKeyNumber:[,[Validators.required]],
    })
  }
  get f(){
    return this.vehicleRegistrationFrom.controls;
  }

}
