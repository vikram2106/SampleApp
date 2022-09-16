import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interface/products.interface';

@Injectable({
  providedIn: 'root'
})
export default class CartService {

  public cartList:Product[]=[];
  products=new BehaviorSubject<any>([]);

  constructor() { }

  getprod(){
    return this.products.asObservable();
  }

  setprod(product:any){
    this.cartList.push(...product);
    return this.products.next(this.cartList)
  }

  addToCart(product: Product) {
    let exist = false;
    for(let i in this.cartList){
      if(this.cartList[i]._id === product._id)
      {
         this.cartList[i].quantity = this.cartList[i].quantity + 1;
        exist= true;
        break;
      } 
    }
    if(!exist){
      this.cartList.push(product); 
        const titles = this.cartList.map((item:any)=>item.title)
          sessionStorage.setItem('name',JSON.stringify(titles));
        const prices = this.cartList.map((item:any)=>item.price); 
           sessionStorage.setItem('price',JSON.stringify(prices));    
        const quantity = this.cartList.map((item:any)=>item.quantity);   
           sessionStorage.setItem('quantity',JSON.stringify(quantity));
      this.products.next(this.cartList);
    }
  }

 getTotal(){
  let grandtotal = 0;
  this.cartList.forEach((tot:any)=>
  {
    grandtotal += tot.quantity * tot.price;
  })
  const tot = sessionStorage.setItem('total',JSON.stringify(grandtotal));
  return grandtotal;
}

removeCart(index:any){
  this.cartList.splice(index,1);
  if(index){
    const name = this.cartList.map((item:any)=>item.title);
    sessionStorage.setItem('name',JSON.stringify(name));
    const price = this.cartList.map((item:any)=>item.price);
    sessionStorage.setItem('price',JSON.stringify(price));
    const quantity = this.cartList.map((item:any)=>item.quantity);
    sessionStorage.setItem('quantity',JSON.stringify(quantity));
  }
  return this.products.next(this.cartList);
}

emptyCart() {
    this.cartList = [];
    return this.products.next(this.cartList);
  }
  
}
