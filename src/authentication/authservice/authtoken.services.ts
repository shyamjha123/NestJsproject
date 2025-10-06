import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { authDto } from "../authdto/authdto.dto";

@Injectable()
export class AuthtokenService{
    constructor(private readonly Jwtservice:JwtService){

    };

    //id card

    generateToken(payload:authDto){
        return this.Jwtservice.sign(payload)
    }
}