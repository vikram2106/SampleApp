export interface OrderDTO{
     username:string; 
     products: Product[],
     total:number;
 }

 export class Product {
    id: string;
    name:string;
    price:number;
    quantity:number;
 };