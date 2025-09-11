import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/user.dto';
import { Userservice } from 'src/services/user.service';
@Controller('/userservice')
export class userService {
    constructor(private userService: Userservice) { }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        this.userService.addUser(createUserDto);
        return { message: 'User Added' }
    };

    @Get()
    findAllUsers() {
        return this.userService.getUsers()
    }

    @Get(':id')
    finduser(@Param('id') id: number) {
     return this.userService.getUser(+id);
     }

    @Put(':id')
    updateUser(@Param(':id') id: number, @Body() updateUserDto: CreateUserDto) {
        this.userService.updateUser(+id, updateUserDto)
        return { message: 'USER UPDATED' }
    };
    @Delete(':id')
    deletUser(@Param(':id') id: number) {
        this.userService.deleteUser(+id)
        return { message: 'USER DELETED' }
    }

}