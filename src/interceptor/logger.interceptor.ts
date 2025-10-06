// create interceptor to logs of request 

import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';

import {Request, Response} from 'express';
import { tap } from 'rxjs';


@Injectable()

export class LoggerInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, next: CallHandler) {
        const ctx = context.switchToHttp();
        const request = ctx.getRequest<Request>();
        const response = ctx.getResponse<Response>();
        const startTime = Date.now();
        return next.handle().pipe(
            tap(()=>{
                const endTime = Date.now();
                const resTime = endTime - startTime;

                console.log(
                    `${request.method} ${request.path} ${response.statusCode} ${resTime}`
                );
                
            })
        )
    }
}