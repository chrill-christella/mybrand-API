import { StatusCodes } from "http-status-codes";
import { BadRequestHttpError } from "../../common/errors/badRequestHttpError";
import { loginSchema } from "./login.schema"

export const loginValidation = async (req, res, next) => {
    try {
        const values = await loginSchema.validate(req.body);
        if(values.error) {
            throw new BadRequestHttpError(StatusCodes.BAD_REQUEST, values.error.details[0].message)
        } else {
            next()
        }
    } catch (error) {
        next(error)
    }
}