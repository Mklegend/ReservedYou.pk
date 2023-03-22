import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Schedule } from 'src/app/models/Schedule';
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
  @Input() close!: ()=>void;
  // Create Schedule Service Here

  constructor(private scheduleApi:ScheduleApiService){
    this.scheduleInput = {} as Schedule;
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

  ngOnInit(){
    this.form.get('registrationNumber')?.setValue(this.scheduleInput.RegistrationNumber);
    this.form.get('scheduleDate')?.setValue(this.scheduleInput.ScheduleDate);
    this.form.get("departureTime")?.setValue(this.scheduleInput.DepartureTime);
    this.form.get("arrivalTime")?.setValue(this.scheduleInput.ArrivalTime);
    this.form.get("busFare")?.setValue(this.scheduleInput.BusFare);
    this.form.get("approved")?.setValue(this.scheduleInput.Approved);
  }

  AddSchedule(){
    let formData = new FormData();
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
    })
    this.close();
  
  }

}
