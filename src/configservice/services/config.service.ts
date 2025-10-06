import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class configService {
    constructor(private readonly configservice:ConfigService){
        const user = this.configservice.get<string>("DATABASE_USER", 'DATABASE_HOST' );

        console.log('====================================');
        console.log(user);
        console.log('====================================');
    }
}