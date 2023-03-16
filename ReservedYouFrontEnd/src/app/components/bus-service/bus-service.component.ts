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
  busServiceApi:BusServiceAPIService;

  constructor(private drawerService: NzDrawerService, busServiceApi:BusServiceAPIService) {
    this.busServiceInput = {} as BusService;
    this.busServiceApi = busServiceApi;
  }

  Delete() {
    this.busServiceApi.DeleteBusService(this.busServiceInput.busServiceId).subscribe((res)=>{
      console.log(res);
    })
  }

  Edit(): void {
    const drawerRef = this.drawerService.create<
      BusServiceFormComponent,
      { value: string },
      string
    >({
      nzTitle: 'Component',
      nzFooter: 'Footer',
      nzExtra: 'Extra',
      nzContent: BusServiceFormComponent,
      nzContentParams: {
        busServiceInput: this.busServiceInput,
      },
    });

    drawerRef.afterOpen.subscribe(() => {
      console.log('Drawer(Component) open');
    });

    drawerRef.afterClose.subscribe((data) => {});
  }
}
