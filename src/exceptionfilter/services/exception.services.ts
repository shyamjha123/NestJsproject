import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { exceptionDto } from '../dto/exception.dto';
@Injectable()
export class exceptionServices {
    private store: Array<exceptionDto> = []

    receiveUser(emp: exceptionDto) {
        if (emp?.experience < 2) {
            throw new BadRequestException({
                error: "Invalid experince",
                message: "emp experience minimum of 2 year",
                timestamp: new Intl.DateTimeFormat("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: true, // 24-hour format
                }).format(new Date()),

            })
        }

        if(emp?.name !== "shyam"){
           throw new UnauthorizedException({
                error: "user not register",
                message: "valid user only register",
                timestamp: new Intl.DateTimeFormat("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: true, // 24-hour format
                }).format(new Date()),

            })
        }
        console.log(emp);
        this.store.push(emp)
    };
    getemployee() {
        return this.store
    }



}