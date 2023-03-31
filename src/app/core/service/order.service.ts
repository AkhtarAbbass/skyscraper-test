import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiCalls } from '../constant/api-constants';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) { }

  public priceCalculate(data: any): Observable<any> {
    console.log("Data:", data)
    return this.http.post<any>(ApiCalls.register.calculatePrice, data);
  }
}
