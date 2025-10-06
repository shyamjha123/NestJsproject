import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configService } from '../services/config.service';

@Module({
    imports:[ConfigModule],
    controllers:[],
    providers:[configService],
})

export  class configmodule{} 