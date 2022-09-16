import { Controller, Get, Logger, Param } from '@nestjs/common';
import { get } from 'mongoose';
import { ProductsService } from './products.service';

@Controller('/products')
export class ProductsController {
    constructor(private readonly prodServ:ProductsService){}
    @Get()
    async getProducts() :Promise<any[]> {
        return await this.prodServ.getProduct();    
    }
    

    @Get(':id')
    async getOneProducts(@Param('id')id:string) :Promise<any> {
        return await this.prodServ.getOneProduct(id);    
    }
   
}
