import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schema/users.schema';
import { UsersDTO } from './dto/users.dto';
import * as bcrypt from 'bcrypt'
@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>){}
    async createUser(userDto:UsersDTO):Promise<User> {
        if ((await this.userModel.findOne({ username: userDto.username }))){
            throw new ConflictException('User already exist');
       }
        const User = await this.userModel.create(userDto);
        User.password = await bcrypt.hash(User.password,10);
        User.save();
        return User;

    }
    async getUsers(){
        const users = await this.userModel.find().exec();
        return users;
    }
    async getOneUser(id:string):Promise<User | void>{
        const user = await this.userModel.findById(id).exec();
        return user;
    }
  
}
