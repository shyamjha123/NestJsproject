
import { Controller, Get, Request } from "@nestjs/common";

// create controller
@Controller("/users")

// create routes

export class userController {

    // inside creates multiples router of user

    @Get("/profile")
    getProfile(@Request() req: Request) {
        console.log('====================================');
        console.log(req);
        console.log('====================================');
        return "hello shyam "
    }

}