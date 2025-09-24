import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { middlewaretestingController } from '../controller/middtesting.controller';
import { userAgent, userAgentMiddleware } from 'src/middleware/user-agent.middleware';
import { AuthMiddlware } from 'src/middleware/auth.middleware';

@Module({
    imports:[],
    controllers:[middlewaretestingController],
    providers:[],
    exports:[]
})
// write here your user agent middleware to excute all controllers of middletestingmodule
export class middletestingmodule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        // test for useragent
        // consumer.apply(userAgent).forRoutes("testing")
        // limited request for chrome or firefox
        // user here multiples middleware
            consumer.apply( AuthMiddlware,userAgent).forRoutes("testing")
    }
}




