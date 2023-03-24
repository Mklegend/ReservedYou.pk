import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusApiService {

  constructor(private http:HttpClient) {

  }

   AddBus(formData:FormData){
    return this.http.post("https://localhost:7163/api/BusService/AddBus",formData);
   }
   GetAllBuses(busServiceId:any){
    return this.http.get(`https://localhost:7163/api/BusService/GetBuses?id=${busServiceId}`);
   }
   DeleteBus(rNo:string){
    return this.http.delete(`https://localhost:7163/api/BusService/DeleteBus?id=${rNo}`);
   }
}
