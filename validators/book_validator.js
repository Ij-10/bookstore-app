const   Joi = require('joi')

const BookSchema = Joi.object({
    title: Joi.string()
        .min(5)
        .max(300)
        .trim()
        .required(),

    shortDescription: Joi.string()
        .min(5)
        .max(500)
        .trim()
        .optional(),

    longDescription: Joi.string()
        .min(10)
        .trim()
        .optional(),

    year: Joi.number()
        .integer()
        .required()
        .max(2022),

    price: Joi.number()
        .integer()
        .required(),

    createAt: Joi.date()
        .default(Date.now),
    
    lastUpdateAt: Joi.date()
        .default(Date.now)
})