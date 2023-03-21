import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteApiService {

  constructor(private http: HttpClient) {

   }
   AddRoute(formData:FormData){
    return this.http.post('https://localhost:7163/api/Admin/UpdateRoute', formData);
   }
   GetAllRoutes(){
    return this.http.get('https://localhost:7163/api/Admin/GetAllRoutes');
   }
   DeleteRoute(id:any){
    return this.http.delete(`https://localhost:7163/api/Admin/DeleteRoute?id=${id}`)
   }
}
