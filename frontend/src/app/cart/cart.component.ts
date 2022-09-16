import { Component, OnInit} from '@angular/core';
import CartService from '../services/cart.service';
import { LoginService } from '../services/login.service';
import { OrderService } from '../services/order.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  img='https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
  user: any;
  product: any;
  price: any;
  Subtotal: any;
  quantity: any;
  
  
  constructor(private cart:CartService,private orderService:OrderService,private login:LoginService) { }
  
  public items:any=[];
  public totalItem:any;
  public grandTotal:any;
 
  ngOnInit(): void {
    this.cart.getprod().subscribe((res)=>{
      this.grandTotal=this.cart.getTotal();
      this.items=res;
       this.totalItem=res.length;
       if(this.totalItem === 0){
        sessionStorage.removeItem('total');
        sessionStorage.removeItem('name');
        sessionStorage.removeItem('price');
        sessionStorage.removeItem('quantity');
       }
       })  
  }

  removeCart(product:any){ 
     this.cart.removeCart(product);
  }

  emptyCart(){
  this.cart.emptyCart();
}

  addQuantity(currentItem: any){
    currentItem.quantity = currentItem.quantity + 1;
    const quantity = this.items.map((item:any)=>item.quantity);
    sessionStorage.setItem('quantity',JSON.stringify(quantity));
    this.grandTotal = this.grandTotal + currentItem.total;
    sessionStorage.setItem('total',this.grandTotal);
  }
  removeQuantity(currentItem:any){
    currentItem.quantity = currentItem.quantity - 1;
    const quantity = this.items.map((item:any)=>item.quantity);
    sessionStorage.setItem('quantity',JSON.stringify(quantity));
    this.grandTotal = this.grandTotal - currentItem.total;
    sessionStorage.setItem('total',this.grandTotal);
  }
  
  checkout(){
    if(this.login.isLoggedin){
      this.user = sessionStorage.getItem('loggedUser');
      this.product = sessionStorage.getItem('name');
      JSON.parse(this.product);
      this.price = sessionStorage.getItem('price');
      JSON.parse(this.price);
      this.quantity = sessionStorage.getItem('quantity');
      JSON.parse(this.quantity);
      this.Subtotal = sessionStorage.getItem('total');
       this.orderService.createOrder({'username': this.user,'products':{'productName':this.product,'productPrice':this.price,'productQuantity':this.quantity},'total':this.Subtotal}).subscribe();   
       this.cart.emptyCart(); 
  }
  }
 


}
