import { Module } from '@nestjs/common';
import { guardsController } from '../controller/guards.controller';
import { BookGuard } from '../guard/guards.guard';

@Module({
    imports:[],
    controllers:[guardsController],
    providers:[BookGuard],
    exports:[]
})
export class guardsmodule{}