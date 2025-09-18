import { Module } from '@nestjs/common';
import { validatorController } from '../controller/validator.controller';
import { validatorService } from '../services/validator.service';

@Module({
    imports:[],
    controllers:[validatorController],
    providers:[validatorService],
    exports:[]
})
export class validatormodule{}