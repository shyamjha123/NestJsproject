import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { authService } from "../authservice/authservice.service";
import { authDto } from "../authdto/authdto.dto";
@Injectable()
export class Jwtstrategy extends PassportStrategy(Strategy){

    constructor(){
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration:false,
            secretOrKey:"Key"
        });
    }



//   // REQUIRED: must be implemented
   validate(payload:any){
    return payload
  }
}