import { Injectable } from '@nestjs/common';

// interface User {
//     id: number;
//     name: string;
//     role: string;
//     salary: number;
//     incentives: number;
// }
@Injectable()
export class userCrudOperationservices {
    private store = new Map<number, userCruddto>();

    addUser(user:userCruddto){
        this.store.set(user.id,user)
    };

     getUsers() {
        return Array.from(this.store).map(([_, user]) => user);
    };
    
}