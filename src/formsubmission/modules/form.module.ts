import { Module } from '@nestjs/common';
import { formSubmissioncontroller } from '../controller/form.controller';
import { formService } from '../services/form.services';

@Module({
    imports:[],
    controllers:[formSubmissioncontroller],
    providers:[formService],
    exports:[]
})



export class formmodule{}