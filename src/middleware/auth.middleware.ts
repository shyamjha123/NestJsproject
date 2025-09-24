
// auth middleware  



import { NestMiddleware, UnauthorizedException } from "@nestjs/common";

function verifyJwtToken(token:string){
   return true
}
export class AuthMiddlware implements NestMiddleware{
    use(req: any, res: any, next: (error?: any) => void) {
        const token = req.headers.authorization?.split(" ")[1];
        if(token && verifyJwtToken(token)){
           next();
           return;
        };

        throw new UnauthorizedException();
    }
}