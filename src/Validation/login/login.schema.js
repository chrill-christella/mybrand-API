import joi from 'joi'

export const loginSchema = joi.object({
    email: joi.string().required().email().messages({
        'string.base': 'Email must be a string',
        'string.required': 'Email is a required attribute',
        'string.email': 'Email must be a valid email string'
    }),

    password: joi.string().required().messages({
        'string.base': 'Password must be a string',
        'string.required': 'Password is a required attribute',
    })
})