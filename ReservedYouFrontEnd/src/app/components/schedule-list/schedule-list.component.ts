import { Component, OnInit } from '@angular/core';
import { NzDrawerComponent, NzDrawerService } from 'ng-zorro-antd/drawer';
import { Schedule } from 'src/app/models/Schedule';
import { ScheduleApiService } from 'src/app/services/schedule-api.service';
import { ScheduleFormComponent } from '../schedule-form/schedule-form.component';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit{
  schedules:Schedule[];
  busServiceId:string = "";

  constructor(private scheduleApi:ScheduleApiService,
    private drawerService:NzDrawerService) {
    this.schedules = [];
  }

  ngOnInit(){
    
  }

  getSchedules(){
    console.log("Fetching Schedules");
    this.schedules = [];
    this.scheduleApi.GetAllSchedule(this.busServiceId).subscribe((res)=>{
      (res as []).map((s:Schedule)=>{
        console.log("Data : ", s);
        this.schedules.push(
          new Schedule (
            s.ScheduleId,
            s.BusServiceId,
            s.RouteId,
            s.RegistrationNumber,
            s.ScheduleDate,
            s.DepartureTime,
            s.ArrivalTime,
            s.BusFare,
            s.Approved
          )
        )
      })
      console.log("Schedules : ", this.schedules);
    })
  }

  deleteSchedule(id:any){
    this.scheduleApi.DeleteSchedule(id).subscribe((res)=>{
      console.log(res);
      this.getSchedules();
    })
  }

  addSchedule(){
    const drawerRef = this.drawerService.create<
      ScheduleFormComponent,
      { getSchedule : any, close:any },
      string
    >({
      nzTitle: 'Add a Schedule',
      nzFooter: '',
      nzExtra: '',
      nzContent: ScheduleFormComponent,
      nzContentParams: {
        getSchedule : () => {
          this.getSchedules();
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

  editSchedule(s:Schedule){
    console.log("Edit Route Parameter : ", s)
    const drawerRef = this.drawerService.create<
      ScheduleFormComponent,
      { ScheduleInput: any, close:any },
      string
    >({
      nzTitle: 'Edit a Route',
      nzFooter: '',
      nzExtra: '',
      nzContent: ScheduleFormComponent,
      nzContentParams: {
        scheduleInput : s,
        getSchedule : () => {
          this.getSchedules();
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
