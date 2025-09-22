
// here write id specific exception handling
import { ArgumentsHost, ExceptionFilter, HttpStatus } from "@nestjs/common";
import { IdExceptions } from "./id-exceptions";
import {Response} from 'express'

export class IdExceptionFilter implements ExceptionFilter{
    catch(exception: IdExceptions, host: ArgumentsHost) {
        const body = {
            message: exception.message,
            error:"Id error",

        };

        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        response.status(HttpStatus.BAD_REQUEST).json(body)
    }
}