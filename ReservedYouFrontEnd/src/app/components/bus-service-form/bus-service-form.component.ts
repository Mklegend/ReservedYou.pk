import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BusService } from 'src/app/models/BusService';
import { BusServiceAPIService } from 'src/app/services/bus-service-api.service';

@Component({
  selector: 'app-bus-service-form',
  templateUrl: './bus-service-form.component.html',
  styleUrls: ['./bus-service-form.component.css']
})
export class BusServiceFormComponent {
  form:FormGroup;
  @Input() busServiceInput:BusService;
  busServiceApi:BusServiceAPIService;
  constructor(busServiceApi:BusServiceAPIService){
    this.form = new FormGroup({
      registrationNumber:new FormControl(),
      name:new FormControl(),
      address:new FormControl(),
      phone:new FormControl(),
      email:new FormControl(),
      password:new FormControl(),
    })
    this.busServiceInput = {} as BusService;
    this.busServiceApi = busServiceApi;
  }
  ngOnInit(){
     this.form.get("registrationNumber")?.setValue(this.busServiceInput.registrationNumber)
     this.form.get("name")?.setValue(this.busServiceInput.name)
     this.form.get("address")?.setValue(this.busServiceInput.address)
     this.form.get("phone")?.setValue(this.busServiceInput.phone)
     this.form.get("email")?.setValue(this.busServiceInput.email)
     this.form.get("password")?.setValue(this.busServiceInput.password)

  }
  AddBusService(){
    // Code For Sending Add Bus Service Post Request 
    let formData = new FormData();
    formData.append("registrationNumber",this.form.get("registrationNumber")?.value);
    formData.append('name', this.form?.get('name')?.value);
    formData.append('address', this.form?.get('address')?.value);
    formData.append('phone', this.form?.get('phone')?.value);
    formData.append('email', this.form?.get('email')?.value);
    formData.append('password', this.form?.get('password')?.value);
    if(this.busServiceInput.busServiceId){
      formData.append('busServiceId', this.busServiceInput.busServiceId);
    }
    this.busServiceApi.AddBusService(formData).subscribe((res)=>{
      console.log(res);
    })
  }
}
