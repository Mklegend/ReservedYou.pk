import { Component,OnInit } from '@angular/core';
import { BusService } from 'src/app/models/BusService';
import { BusServiceAPIService } from 'src/app/services/bus-service-api.service';

@Component({
  selector: 'app-bus-service-list',
  templateUrl: './bus-service-list.component.html',
  styleUrls: ['./bus-service-list.component.css']
})
export class BusServiceListComponent implements OnInit {
  busServices:BusService[];
  busServiceApi:BusServiceAPIService;
  constructor(busServiceApi:BusServiceAPIService){
    this.busServices = [];
    this.busServiceApi = busServiceApi;
  }
  ngOnInit(){
    this.busServiceApi.GetAllBusServices().subscribe((res:any) => {
      (res as []).map((bs:any) => {
        console.log(bs)
        this.busServices.push(new BusService(bs.busServiceId,bs.registrationNumber,bs.name,bs.address,bs.email,bs.phone,bs.password));
      })
    });
  }
}
