import { Controller, Get, Post, Req } from '@nestjs/common';
import {Request} from 'express'

@Controller('testing')
export class middlewaretestingController {
    @Get()
    testingRequest(@Req()  req:Request) {
        console.log(req["ua"]);
        
        return { status: "suceess", message: "successfully get response" }
    };

    @Post()
    uploadRequest() {
        return { status: "suceess", message: "successfully get response" }
    }
}