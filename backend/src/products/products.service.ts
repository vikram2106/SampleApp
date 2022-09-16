import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './schema/products.schema';

@Injectable()
export class ProductsService {
    constructor(@InjectModel('Product') private productModel: Model<Product>) {}
    async getProduct():Promise<Product[]>{
        return await this.productModel.find().exec();
    }
    async getOneProduct(id:string):Promise<Product>{
        return await this.productModel.findById(id).exec();
    } 
}
