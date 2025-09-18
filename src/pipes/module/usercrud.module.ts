import { Module } from '@nestjs/common';
import usercrudController from '../controllers/usercrud.controller';
import { userCrudOperationservices } from '../services/usercrud.services';

@Module({
    imports:[],
    controllers:[usercrudController],
    providers:[userCrudOperationservices],
    exports:[]
})

export class usercrudmodule{}