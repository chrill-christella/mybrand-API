import { StatusCodes } from 'http-status-codes';

export class ApplicationError extends Error{
    constructor(status, message){
        super(message)
        this.name = this.constructor.name
        this.message = message || ('Some thing went wrong on the server. Please try again')
        this.status = status || StatusCodes.INTERNAL_SERVER_ERROR
        Error.captureStackTrace(this, this.constructor)
    }
}