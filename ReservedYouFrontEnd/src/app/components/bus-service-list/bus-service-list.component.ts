import { Component, OnInit } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { BusService } from 'src/app/models/BusService';
import { BusServiceAPIService } from 'src/app/services/bus-service-api.service';
import { BusServiceFormComponent } from '../bus-service-form/bus-service-form.component';

@Component({
  selector: 'app-bus-service-list',
  templateUrl: './bus-service-list.component.html',
  styleUrls: ['./bus-service-list.component.css'],
})
export class BusServiceListComponent implements OnInit {
  // List for Storing BusServices
  busServices: BusService[];
  // API SERVICE
  busServiceApi: BusServiceAPIService;

  constructor(
    busServiceApi: BusServiceAPIService,
    private drawerService: NzDrawerService,
    private notification: NzNotificationService
  ) {
    this.busServices = [];
    this.busServiceApi = busServiceApi;
  }

  //
  ngOnInit() {
    this.getBusServices();
  }

  // Add Functions for CRUD

  getBusServices() {
    console.log("Fetching Bus Services");
    this.busServices = [];
    this.busServiceApi.GetAllBusServices().subscribe((res: any) => {
      (res as []).map((bs: any) => {
        console.log(bs);
        this.busServices.push(
          new BusService(
            bs.busServiceId,
            bs.registrationNumber,
            bs.name,
            bs.address,
            bs.email,
            bs.phone,
            bs.password
          )
        );
      });
    });
  }

  deleteBusService(id: any) {
    this.busServiceApi.DeleteBusService(id).subscribe((res) => {
      console.log(res);
      this.getBusServices();
      this.notification.create('success', 'Success', 'Bus Service has been Deleted !');
    });
  }

  addBusService() {
    console.log("Function Called !");
    const drawerRef = this.drawerService.create<
      BusServiceFormComponent,
      { getBusService : any, close:any },
      string
    >({
      nzTitle: 'Add a Bus Service',
      nzFooter: '',
      nzExtra: '',
      nzContent: BusServiceFormComponent,
      nzContentParams: {
        getBusService : () => {
          this.getBusServices();
        },
        close: () => {
          drawerRef.close();
        }
      },
    });

    drawerRef.afterOpen.subscribe(() => {
      console.log('Drawer(Component) open');
    });

    drawerRef.afterClose.subscribe((data) => {});
  }

  editBusService(bs:BusService) {
    const drawerRef = this.drawerService.create<
      BusServiceFormComponent,
      { value: string,close:any },
      string
    >({
      nzTitle: 'Edit a Bus Service',
      nzFooter: '',
      nzExtra: '',
      nzContent: BusServiceFormComponent,
      nzContentParams: {
        busServiceInput : bs,
        getBusService : () => {
          this.getBusServices();
        },
        close: () => {
          drawerRef.close();
        }
      },
    });

    drawerRef.afterOpen.subscribe(() => {
      console.log('Drawer(Component) open');
    });

    drawerRef.afterClose.subscribe((data) => {});
  }
}
