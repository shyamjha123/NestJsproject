import { Module, OnModuleInit } from '@nestjs/common';
import { applicationLifeController } from '../controller/applicationlife.controller';

@Module({
    imports:[],
    controllers:[applicationLifeController],
    providers:[],
    exports:[]
    
})

export class applicationmodule implements OnModuleInit {
    onModuleInit() {
        console.log("application module init ");
        
    }
}