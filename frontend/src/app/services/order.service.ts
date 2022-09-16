import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../interface/order.interface';

@Injectable({
    providedIn: 'root'
  })
  
  export class OrderService{
    BASE_URL:string = 'http://localhost:3000'
  constructor(private http:HttpClient) { }
  createOrder(order:any):Observable<Order>{
    return this.http.post<Order>(`${this.BASE_URL}/order`, order);
  }

  }