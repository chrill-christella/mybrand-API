import { StatusCodes } from 'http-status-codes'
import * as jwt from 'jsonwebtoken'
import { UnAuthorizedHttpError } from '../common/errors/unAuthorizedHttpError'
require('dotenv').config()

export const generateAccessToken = async (payload) => {
    const token = await jwt.sign(payload, process.env.JWT_SECRETE)
    return token
}

export const decode = async (token) => {
    try {
        const data = await jwt.verify(token, process.env.JWT_SECRETE)
        return data
    } catch (error) {
        throw new UnAuthorizedHttpError(StatusCodes.UNAUTHORIZED, 'Invalid access token we suspect that it might be expired')
    }
}