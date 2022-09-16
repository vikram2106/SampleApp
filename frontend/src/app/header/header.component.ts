import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import CartService from '../services/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user:any;
  isLoggedIn=false;
  totalItem:any;
  username:any;
  

  constructor(private cart:CartService , private loginService :LoginService) { }

  ngOnInit(): void {
    this.cart.getprod().subscribe((res:any)=>{
      this.totalItem = res.length;
    })
    if(sessionStorage.getItem('isLoggedIn')){
     this.user= this.getData();
    }
     else{
      this.user="Account";   
     }     
  }
  
getData(){
  this.username=sessionStorage.getItem('loggedUser');
  return this.username;
}
logout(){
    this.loginService.logout();
    sessionStorage.clear();
    this.cart.emptyCart();   
}


}
