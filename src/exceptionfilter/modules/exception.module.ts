import { Module } from '@nestjs/common';
import { exceptionHandleController } from '../controller/exception.controller';
import { exceptionServices } from '../services/exception.services';


@Module({
    imports:[],
    controllers:[exceptionHandleController],
    providers:[exceptionServices],
    exports:[]
})

export class exceptionmodule {}