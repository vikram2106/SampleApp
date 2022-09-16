import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersDTO } from './dto/users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userSer:UsersService){}
    @Post()
    async createUser(@Body() userDto:UsersDTO){
        const user = await this.userSer.createUser(userDto);
        return user;
    }
    @Get()
    async getAllUsers(){
        return this.userSer.getUsers();
    }
    @Get(':id')
    async getOneUser(@Param('id')id:string){
        return this.userSer.getOneUser(id);
    }
}
