import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OrderDTO } from './dto/order.dto';
import { Order } from './schema/order.schema';
@Injectable()
export class OrderService {
    constructor(@InjectModel('Order') private readonly orderModel:Model<Order>){}
    async createOrder(order:OrderDTO):Promise<Order>{
        const orders = await this.orderModel.create(order);
        orders.save();
        return orders;


    }
}
