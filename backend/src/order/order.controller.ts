import { Body, Controller, Param, Post } from '@nestjs/common';
import { OrderDTO } from './dto/order.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
    constructor(private orderSer:OrderService){}
    @Post()
    async createOrder(@Body()order:OrderDTO){
    
        const orders = await this.orderSer.createOrder(order);
        return orders

    }
}
