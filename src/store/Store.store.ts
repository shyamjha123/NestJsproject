
import { Injectable, Scope } from '@nestjs/common';
interface Subadmins {
    name: string,
    id:number

};
// this class uses in other modules or controller as a dependency 
// use default scope 
// @Injectable({ scope:Scope.DEFAULT})'
// request scope     
// @Injectable({ scope:Scope.REQUEST})
// Transient scope 

@Injectable({ scope:Scope.TRANSIENT})

 export class Store {
    private store = new Map<number, Subadmins>();
    addSubadmins(subadmin: Subadmins) {
        this.store.set(subadmin.id, subadmin)
        // return 'store gotted'
    };

    getSubadmin(id: number) {
        return this.store.get(id)
    };
    getSubadmins() {
        return Array.from(this.store).map((_, subadmin) => subadmin)
    };

    updateSubadmin(id: number, subadmin: Subadmins) {
        this.store.set(id, subadmin)
    };

    deleteSubadmin(id: number) {
        this.store.delete(id)
    }


}