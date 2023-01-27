import { ApplicationError } from "./error"

export class UnAuthorizedHttpError extends ApplicationError {
    constructor(status, message){
        super(status, message)
    }
}