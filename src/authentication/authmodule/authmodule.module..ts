import { Module } from '@nestjs/common';
import { authService } from '../authservice/authservice.service';
import { PassportLocalStrategy } from '../auth/passport.local.strategy';
import { authController } from '../authcontroller/authcontroller.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthtokenService } from '../authservice/authtoken.services';
import { Jwtstrategy } from '../auth/passport.jwt.strategy';

@Module({
    imports:[PassportModule, JwtModule.register({
        secret:"Key",
        signOptions:{
            expiresIn:"60s"
        }
    })],
    controllers:[authController],
    providers:[authService, PassportLocalStrategy, AuthtokenService,Jwtstrategy],
    exports:[]
})

export class authmodule{}