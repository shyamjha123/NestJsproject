import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthtokenService } from '../authservice/authtoken.services';
import { RoleGuard } from '../guard/role.guard';
// import { Request } from 'express';

@Controller('userdata')

export class authController {
    constructor(private readonly authService: AuthtokenService) { }
    // @Post()
    // @UseGuards(AuthGuard('local'))
    // getusers(@Request() req:any){
    // //   return 'this is private darta'
    // return req.user
    // }
    @Post()
    @UseGuards(AuthGuard('local'))
    login(@Request() req: any) {
        // return jwt token with specific user payload user credential
        return this.authService.generateToken(req.user)
    }

    @Get('/android-developer')
    @UseGuards(AuthGuard('jwt'), new RoleGuard("ANDROID_DEVELOPER"))
    androiddeveloperaccess(@Request() req: any) {
        // return jwt token with specific user payload user credential
        // return this.authService.generateToken(req.user)
        return ' This is private for android developer'
    }

    @Get('/web-developer')
    @UseGuards(AuthGuard('jwt'), new RoleGuard("WEB_DEVELOPER"))
    webdeveloperaccess(@Request() req: any) {
        // return jwt token with specific user payload user credential
        // return this.authService.generateToken(req.user)
        return ' This is private for web developer'
    }



}