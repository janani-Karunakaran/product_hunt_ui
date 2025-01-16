import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }

  baseUrl:String='http://localhost:8080/';

  getProductList():Observable<any>{
      return this.http.get(this.baseUrl+'getAllProductList');
  }
}
