import { Component, OnInit } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { Route } from 'src/app/models/Route';
import { RouteApiService } from 'src/app/services/route-api.service';
import { RouteFormComponent } from '../route-form/route-form.component';

@Component({
  selector: 'app-route-list',
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.css']
})
export class RouteListComponent implements OnInit {

  routes: Route[];

  constructor(private routeApiService:RouteApiService,
      private drawerService: NzDrawerService
    ){
    this.routes = [];
  }
  ngOnInit(){
    this.getRoutes();
  }
  getRoutes(){
    console.log("Fetching Routes");
    this.routes = [];
    this.routeApiService.GetAllRoutes().subscribe((res)=>{
      (res as []).map((r:any)=>{
        console.log("Data : " , r)
        this.routes.push(
          new Route (
            r.routeId,
            r.startLocation,
            r.endLocation,
            r.distance,
            r.duration
          )
        )
      })
      console.log("Routes : ", this.routes);
    })
  }

  deleteRoute(id:any){
    this.routeApiService.DeleteRoute(id).subscribe((res)=>{
      console.log(res);
      this.getRoutes();
    })
  }
  
  addRoute(){
    const drawerRef = this.drawerService.create<
      RouteFormComponent,
      { getRoute : any, close:any },
      string
    >({
      nzTitle: 'Add a Route',
      nzFooter: '',
      nzExtra: '',
      nzContent: RouteFormComponent,
      nzContentParams: {
        getRoute : () => {
          this.getRoutes();
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

  editRoute(r:Route) {
    console.log("Edit Route Parameter : ", r)
    const drawerRef = this.drawerService.create<
      RouteFormComponent,
      { RouteInput: any, close:any },
      string
    >({
      nzTitle: 'Edit a Route',
      nzFooter: '',
      nzExtra: '',
      nzContent: RouteFormComponent,
      nzContentParams: {
        routeInput : r,
        getRoute : () => {
          this.getRoutes();
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
