import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})

export class CustomerService {
    constructor(
        private http: HttpClient,
    ) { }


  BaseURL = environment.baseUrlAPI;


  PostAllCustomerValues(data:any){

    return this.http.post(`${this.BaseURL}/Customer`,data);
  }

  GetAllCustomerValues(){
    return this.http.get(`${this.BaseURL}/Customer`);
  }

  UpdateCustomer(data:any){
    return this.http.put(`${this.BaseURL}/Customer/${data.id}`,data);
  }

  getSpecificCustomer(id:number){
    return this.http.get(`${this.BaseURL}/Customer/${id}`);
  }

  getSpecificCustomerHistory(id:number){
    return this.http.get(`${this.BaseURL}/Customer/${id}/history?days=30`);
  }

  DeleteCustomerValues(dataId:any){
     return this.http.delete(`${this.BaseURL}/Customer/${dataId}`);
  }

  GetEntityById(CustomerId:any): Observable<any> {
    return this.http.get(`${this.BaseURL}/Customerid/` + CustomerId);
  }

  SearchCustomer(data:any): Observable<any> {
    const temp:any = [];
    const objectKeyPair = Object.entries(data);
    objectKeyPair.forEach((element, index) => {
    if (element[1]) {
    temp.push(`${element[0]}=${element[1]}`);
    }
    });
    let jwt_token = sessionStorage.getItem('JwtToken');
    return this.http.get(`${this.BaseURL}` + `/Customer/get/search?jwt_token=${jwt_token}${temp.length > 0 ? `&${temp.join('&')}` : ''}`);
  }
}