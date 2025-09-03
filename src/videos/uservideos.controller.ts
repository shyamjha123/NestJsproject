import { Controller, Param, Post, Query, Headers } from '@nestjs/common';
interface Queryuser {
    name: string,
    age: number
};

@Controller('/videos')
export class userVideos {


    @Post('/submitvideos/:id')
    // passing param to get from client param data 
    submit(@Param('id') pram: number) {
        console.log('====================================');
        console.log(pram);
        console.log('====================================');
        return 'submit'
    }

    // 

    @Post('/getvideos')
    // send query from client 
    getdata(@Query() quer: Queryuser) {
        console.log('====================================');
        console.log(quer.name);
        console.log('====================================');
        return 'submit'
    }

        @Post('/getheaders')
    // get Headers from client
    getdataoflist(@Headers() head:Record<string, any> ) {
        console.log('====================================');
        console.log(head);
        console.log('====================================');
        return 'submit'
    }

}