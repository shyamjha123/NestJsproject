// write here middleware to search from client side request come from which platform 
import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
// function based middleware used 
export function userAgent(req: Request, res: Response, next: NextFunction) {
    const ua = req.headers["user-agent"];
    console.log(ua);

    req["ua"] = ua;
    res.json({ success: true, ua })
    // next();

}


// class based middleware used for limited only limited platform from client xan used routes like chrome firefox

@Injectable()
export class userAgentMiddleware implements NestMiddleware {
    use(req: any, res: any, next: (error?: any) => void) {
        const ua = req.headers["user-agent"];

        if (!this.isuserAgentAcceptable(ua)) {
            res.status(HttpStatus.FORBIDDEN).json({ message: "Not Allowed" });
            return;
        }
        console.log(ua);

        req["ua"] = ua;
        res.json({ success: true, ua })

        next()
    };

    private isuserAgentAcceptable(userAgent: string) {
        const acceptedUserAgents = ["chrome", "firefox"];
        return acceptedUserAgents.some((agent) =>
            userAgent.toLowerCase().includes(agent.toLowerCase())
        )
    }


};







