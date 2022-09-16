
export interface Order {
    _id: string,
  readonly username:string;
  products:product[];
  total:number;

}

export interface product{
  productName:string;
  productPrice:number;
  productQuantity:number;

}