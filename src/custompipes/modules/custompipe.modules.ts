import { Module } from '@nestjs/common';
import { custompipesController } from '../controller/custompipes.controller';
@Module({
    imports:[],
    controllers:[custompipesController],
    providers:[],
    exports:[]
})
export class customePipe{}