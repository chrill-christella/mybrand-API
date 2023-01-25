import { ApplicationError } from "./error"

export class BadRequestHttpError extends ApplicationError {
    constructor(status, message){
        super(status, message)
    }
}