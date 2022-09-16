import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../interface/products.interface';
import cartService from '../services/cart.service';
import { ProductsService } from '../services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  img1='assets/images-removebg-preview.png';
  name1='Mens';
  img2='assets/download-removebg-preview.png'
  name2='Womens';
  img3='https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100';
  name3='Electronics';
  img4='https://rukminim1.flixcart.com/image/580/696/kqco5u80/jewellery-set/g/c/h/780-r-a-enterprises-original-imag4dyzceaqhkhp.jpeg?q=50';
  name4 ='Jewelerys';

  products : Product[]=[];
  filterProd:Product[]=[];
  search="";
  

  constructor(private prodSer:ProductsService,private cart:cartService,private route:Router) { }

  ngOnInit(): void {
        this.prodSer.getProducts().subscribe(res=>{
        this.products= res;
        this.filterProd=res;

        this.products.forEach((res)=>{
          Object.assign(res,{total:res.price * res.quantity})
        })  
    })
  }
  addToCart(product: any) {
    this.cart.addToCart(product);
  }

  filter(category:string){
      this.filterProd=this.products
      .filter((res:any)=>{
      if(res.category === category || category === ''){
         return res;
      }
      })
     }
}
