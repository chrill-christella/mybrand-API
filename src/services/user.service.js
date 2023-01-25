import { StatusCodes } from 'http-status-codes';
import User from '../models/user.model'
import { compareContent } from '../utils/bcrypt.util';
import { generateAccessToken } from '../utils/jwt.util';
import {UnAuthorizedHttpError} from '../common/errors/unAuthorizedHttpError'

export const login = async (req, res, next, loginData) => {
        const isUserExisting = await findUserByEmail(loginData.email)
        const isPasswordValid = await compareContent(loginData.password, isUserExisting?.password ? isUserExisting.password : 'noHashFound')
        if (!isPasswordValid || !isUserExisting) {
            throw new UnAuthorizedHttpError(StatusCodes.UNAUTHORIZED, 'Invalid credentials')
        }
        return {
            accessToken: await generateAccessToken({emai: isUserExisting.email, id: isUserExisting._id})
        } 
}

export const findUserByEmail = async (email) => {
    return await User.findOne({email: email})
}