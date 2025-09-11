import { Controller, Inject } from '@nestjs/common';
import { Store } from './Store.store';

@Controller('/userdetails')

export class userDetails{
    // provide injectio token in form of sting 
    // constructor(@Inject('DATABASE_NAME') private dbname:string){
    //     console.log(this.dbname);
        
    // }
 // provude injectio token in form of Array
    //  constructor(@Inject('MAIL') private Mail:Array<string | any >){
    //     console.log(this.Mail);
        
    // }

    
    // constructor(private store:Store){
    //     console.log(store);
        
    // }
}