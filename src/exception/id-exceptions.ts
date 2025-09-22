// write here your custom exceptions 

export class IdExceptions extends Error{
    constructor(message?:string){
        super(message || "Invalid Id");
    }
}