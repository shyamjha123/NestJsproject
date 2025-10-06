    import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
    import { Observable } from 'rxjs';
    import { Request } from 'express';
    // define guard
    @Injectable()

    export class BookGuard implements CanActivate{
        //key basis guar react check key presemt in header or not 
        // public Key:string = "BAHJHSDJHJSDHJSDHJHD";
        // canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        //     const ctx = context.switchToHttp();
        //     const request = ctx.getRequest<Request>();
        //     if(request.header("Key") === undefined) return false;
        //     return request.header("Key") === this.Key;

        // }


        public username:string = "shyam jha";
        public password:string = "12345678";
        canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
            const ctx = context.switchToHttp();
            const request = ctx.getRequest<Request>();
            if(request.header("username") === undefined || (request.header("password") === undefined)) return false;
            return request.header("username") === this.username &&  request.header("password") === this.password;

        }
    }