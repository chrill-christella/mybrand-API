import joi from 'joi'

export const createArticleSchema = joi.object({
    title: joi.string().messages({
        'string.base': 'title must be a string',
        'string.required': 'title is a required attribute',
    }),

    description: joi.string().required().messages({
        'string.base': 'description must be a string',
        'string.required': 'description is a required attribute',
    })
})

export const updateArticleSchema = joi.object({
    title: joi.string().optional().messages({
        'string.base': 'title must be a string',
        'string.required': 'title is a required attribute',
    }),

    description: joi.string().optional().messages({
        'string.base': 'description must be a string',
        'string.required': 'description is a required attribute',
    })
})