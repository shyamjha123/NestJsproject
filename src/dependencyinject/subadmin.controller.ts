import { Controller, Inject, Optional } from '@nestjs/common';
import { subadminstore } from '../store/subadmin.store';
import { Store } from 'src/store/Store.store';

@Controller('/subadmin')
// pass in constructor our dependency instance which is store in our provider 
export class Subadmin {
    // first method is providing instance as constructor method 
    // constructor(@Optional() private store: subadminstore) {
    //     console.log(store);

    // }
    // 
    // by providing p[tional decorator if u want that ur depency become optioal means it not store in providers than on that time u dont got any error ]
    // constructor( @Optional() private store:subadminstore){
    //     console.log(store);

    // }

    //  2nd method is using Inject decorator give it token like here subadminstore
    // constructor(@Inject(subadminstore) store: subadminstore) {
    //     console.log(store);

    // }
    // give token as a string format also 
        constructor(@Inject(Store) store: Store) {
        console.log(store);

    }
}