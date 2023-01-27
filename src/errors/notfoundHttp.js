import { ApplicationError } from "./error"

export class NotFoundHttpError extends ApplicationError {
    constructor(status, message){
        super(status, message)
    }
}