import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BusServiceAPIService {
  constructor(private http: HttpClient) {}

  AddBusService(formData: FormData) {
    return this.http.post('https://localhost:7163/api/Admin/UpdateBusService', formData);
  }
  GetAllBusServices(){
    return this.http.get('https://localhost:7163/api/Admin/GetAllBusServices');
  }
  DeleteBusService(id:any){
    return this.http.delete(`https://localhost:7163/api/Admin/DeleteBusService/${id}`);
  }
}
