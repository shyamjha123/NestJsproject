// create album controller

interface Albumdata{
    username:String,
    roll:number
};

const UserRoll:Albumdata ={
    username:'shyam',
    roll:10
    
}
import { Controller, Post, HttpCode, HttpStatus, Request, Response, Header, Redirect, Get } from "@nestjs/common"


@Controller('/album')
export class userAlbum {
    @Post('/photos')
    // redirect route
    @Redirect('/album/account', 302)
    // status code 
    @HttpCode(HttpStatus.OK)
    @Header('Cache-Control', 'none')
    @Header('X-Name', 'Shyam jha')
    // request from which server and handle s=response when used passthrough true than client can also hit response
    uploadPost(@Request() req: Request) {
        // res.status(200)
        return  {
            "shyam":"jha"
        }
    }

    @Post('/account')
    getredirectRoute() {
        return UserRoll
    }
}
