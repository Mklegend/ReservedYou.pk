import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { BusService } from 'src/app/models/BusService';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { BusServiceFormComponent } from '../bus-service-form/bus-service-form.component';
import { BusServiceAPIService } from 'src/app/services/bus-service-api.service';

@Component({
  selector: 'app-bus-service',
  templateUrl: './bus-service.component.html',
  styleUrls: ['./bus-service.component.css'],
})
export class BusServiceComponent {

  @Input() busServiceInput: BusService;
  constructor(private drawerService: NzDrawerService, busServiceApi:BusServiceAPIService) {
    this.busServiceInput = {} as BusService;
  }
}
