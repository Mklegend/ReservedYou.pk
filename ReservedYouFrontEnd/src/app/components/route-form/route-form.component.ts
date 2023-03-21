import { Component,Input,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route } from 'src/app/models/Route';
import { RouteApiService } from 'src/app/services/route-api.service';

@Component({
  selector: 'app-route-form',
  templateUrl: './route-form.component.html',
  styleUrls: ['./route-form.component.css']
})
export class RouteFormComponent implements OnInit {
  form:FormGroup;
  @Input() routeInput:Route;
  @Input() getRoute!:()=>void;
  @Input() close!:()=>void;
  constructor(private routeApiService:RouteApiService){
    this.form = new FormGroup({
      startLocation:new FormControl(),
      endLocation:new FormControl(),
      distance: new FormControl (),
      duration: new FormControl()
    })
    this.routeInput = {} as Route;
  }
  ngOnInit(){
    console.log("routeInput : ", this.routeInput);
    this.form.get("startLocation")?.setValue(this.routeInput.startLocation);
    this.form.get("endLocation")?.setValue(this.routeInput.endLocation);
    this.form.get("distance")?.setValue(this.routeInput.distance);
    this.form.get("duration")?.setValue(this.routeInput.duration);
  }
  onSubmit(){
    // Code for Adding/Updating Route
    console.log("Routes Data Submitted")
    let formData = new FormData();
    formData.append("startLocation",this.form.get("startLocation")?.value);
    formData.append("endLocation",this.form.get("endLocation")?.value);
    formData.append("distance",this.form.get("distance")?.value);
    formData.append("duration",this.form.get("duration")?.value);

    if(this.routeInput.routeId){
      formData.append("routeId",this.routeInput.routeId);
    }

    this.routeApiService.AddRoute(formData).subscribe((res)=>{
      console.log(res);
      this.getRoute();
      this.close();
    })
  }
}
