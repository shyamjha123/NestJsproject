import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { authService } from "../authservice/authservice.service";
import { authDto } from "../authdto/authdto.dto";
@Injectable()
export class PassportLocalStrategy extends PassportStrategy(Strategy){

    constructor(private readonly userService:authService){
        super();
    }



//   // REQUIRED: must be implemented
   validate(username: string, password: string){
      const user = this.userService.getUserByName(username);
      if(user === undefined) throw new UnauthorizedException();
      if(user.password === password) return user;
  }
}