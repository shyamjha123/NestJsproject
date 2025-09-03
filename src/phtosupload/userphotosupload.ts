import { Body, Controller, Post } from '@nestjs/common';
interface uploadvideos {
    imageurl: string,
    expireyDate: number
}
@Controller('/uploadphotos')
export class uploadUserphotos {
    @Post('/userphoto')
    uploadassets(@Body() bodyData: uploadvideos) {
        console.log('====================================');
        console.log(bodyData);
        console.log('====================================');
        return { status: true, data:bodyData}
    }
}