import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document,SchemaTypes } from 'mongoose';
import { Item } from './item.schema';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop()
  username: string;
 
  @Prop()
  products:Item[];

  @Prop()
  total:number;


}

export const OrderSchema = SchemaFactory.createForClass(Order);
