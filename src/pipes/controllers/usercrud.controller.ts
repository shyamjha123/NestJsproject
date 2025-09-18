import { Body, Controller, Get, HttpStatus, ParseBoolPipe, ParseEnumPipe, ParseFloatPipe, ParseIntPipe, Post, Query, UsePipes } from '@nestjs/common';
import { userCrudOperationservices } from '../services/usercrud.services';

enum Jobtype{
    PART_TIME,
    FULL_TIME
}

@Controller('/userCrud')
// globally piper set 

export default class usercrudController{

    constructor(private usercrudService: userCrudOperationservices){}
   
    @Post()
    @UsePipes(ParseIntPipe)
    // ParseIntpipe check Query come from data query is Integer or not 
    // pARSE eNUM PIPE 
    createUser(@Body()   userBody:userCruddto, @Query('data') quer:Record<string,any>){
        console.log(typeof quer);
        
        this.usercrudService.addUser(userBody);
        return {data:{
            messgae:'USER ADDED',
            // userBody
        }}
    };
    
    @Get()
    readUser(){
       return  this.usercrudService.getUsers()
    }

}

