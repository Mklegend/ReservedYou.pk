import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScheduleApiService {

  constructor(private http:HttpClient) { 

  }

  AddSchedule(formData:FormData){
    return this.http.post("https://localhost:7163/api/BusService/UpdateSchedule",formData);
  }
  // Get All Schedules belonging to the BusService
  GetAllSchedule(busServiceId:any){
    // Add Api Call
    return this.http.get(`https://localhost:7163/api/BusService/GetSchedules?id=${busServiceId}`);
  }
  DeleteSchedule(id:any){
    // Add Api Call
    return this.http.delete(`https://localhost:7163/api/Admin/DeleteSchedule?id=${id}`);
  }
}
