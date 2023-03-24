import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Bus } from 'src/app/models/Bus';
import { Route } from 'src/app/models/Route';
import { Schedule } from 'src/app/models/Schedule';
import { BusApiService } from 'src/app/services/bus-api.service';
import { RouteApiService } from 'src/app/services/route-api.service';
import { ScheduleApiService } from 'src/app/services/schedule-api.service';

@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.css']
})
export class ScheduleFormComponent implements OnInit {
  form:FormGroup;
  @Input() scheduleInput:Schedule;
  @Input() getSchedule!: ()=>void;
  @Input() busServiceId:string;
  @Input() close!: ()=>void;
  // Create Schedule Service Here
  
  // Adding a List to store routes

  routes:Route[];
  buses:Bus[];

  

  constructor(private scheduleApi:ScheduleApiService,
     private routeApi:RouteApiService,
     private busApi:BusApiService){
    this.scheduleInput = {} as Schedule;
    this.busServiceId = "";
    this.routes = [];
    this.buses = [];
    this.form = new FormGroup (
      {
        busServiceId: new FormControl(),
        routeId: new FormControl(),
        registrationNumber: new FormControl(),
        scheduleDate: new FormControl(),
        departureTime: new FormControl(),
        arrivalTime: new FormControl(),
        busFare: new FormControl(),
        approved: new FormControl()
      }
    )
  }

  // Function to get Routes
  getRoutes(){
    this.routeApi.GetAllRoutes().subscribe((res)=>{
      (res as []).map((r:Route)=>{
        this.routes.push(new Route(r.routeId,r.startLocation,r.endLocation,r.distance,r.distance));
      })
    })
  }

  getBuses(){
    this.busApi.GetAllBuses(this.busServiceId).subscribe((res)=>{
      (res as []).map((b:Bus)=>{
        this.buses.push(new Bus(b.busServiceId,b.registrationNumber,b.isAvailable));
      })
    })
  }


  // We set the values of FormControls in this
  // for the edit functionality !
  ngOnInit(){
    this.getRoutes();
    this.getBuses();
    this.form.get("routeId")?.setValue(this.scheduleInput.RouteId);
    this.form.get('registrationNumber')?.setValue(this.scheduleInput.RegistrationNumber);
    this.form.get('scheduleDate')?.setValue(this.scheduleInput.ScheduleDate);
    this.form.get("departureTime")?.setValue(this.scheduleInput.DepartureTime);
    this.form.get("arrivalTime")?.setValue(this.scheduleInput.ArrivalTime);
    this.form.get("busFare")?.setValue(this.scheduleInput.BusFare);
    this.form.get("approved")?.setValue(this.scheduleInput.Approved);
  }

  AddSchedule(){
    let formData = new FormData();
    formData.append("busServiceId",this.form.get("busServiceId")?.value);
    formData.append("routeId",this.form.get("routeId")?.value);
    formData.append("registrationNumber",this.form.get('registrationNumber')?.value);
    formData.append("scheduleDate",this.form.get("scheduleDate")?.value);
    formData.append("departureTime",   this.form.get("departureTime")?.value);
    formData.append("arrivalTime",   this.form.get("arrivalTime")?.value);
    formData.append("busFare",this.form.get("busFare")?.value);
    formData.append("approved", this.form.get("approved")?.value);
    
    if(this.scheduleInput.ScheduleId) {
      formData.append("scheduleId",this.scheduleInput.ScheduleId)
    }

    // Call to AddSchedule Service
    this.scheduleApi.AddSchedule(formData).subscribe((res)=>{
      console.log(res);
      this.getSchedule();
    })
    this.close();
  
  }

}
