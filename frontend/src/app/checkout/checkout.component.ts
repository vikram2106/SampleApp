import { Component, OnInit } from '@angular/core';
import CartService  from '../services/cart.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private cart :CartService) { }
  img ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA51Tm8zHoPDnHLdPbzkNLsEAwJu8lMl995A&usqp=CAU'

  ngOnInit(): void {
  }


}
