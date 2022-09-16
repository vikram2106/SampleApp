import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Product } from '../interface/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  BASE_URL: string =  'http://localhost:3000';
  constructor(private http:HttpClient) { }
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.BASE_URL}/products`);
  }
}
