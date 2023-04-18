import * as Joi from "joi";
import { emailRegex } from "src/common/utils/regex";
import { Timestamp } from "typeorm";

export const createUserValidationSchema = Joi.object().keys({
    user_id: Joi.string().optional().allow(null, '', 'null'),
    name: Joi.string().min(3).required(),
    bussiness_name: Joi.string().required(),
    email: Joi.string().required().email({
        minDomainSegments: 1,
        tlds: { allow: ["com"]}
    }),
    password: Joi.string().required()
        .messages({
            "string.pattern.base": `Password should be between 3 to 30 characters and contain letters or numbers only`,
            "string.empty": `Password cannot be empty`,
            "any.required": `Password is required`,
        }),
    phone: Joi.string().required(),
    createdAt: Joi.date().timestamp('unix'),
    updatedAt: Joi.date().timestamp('unix')
})

export const loginValidationSchema = Joi.object().keys({
    email: Joi.string().required().email({
        minDomainSegments: 1,
        tlds: { allow: ["com"]}
    }),
    password: Joi.string().required().messages({
        "string.pattern.base": `Password should be between 3 to 30 characters and contain letters or numbers only`,
        "string.empty": `Password cannot be empty`,
        "any.required": `Password is required`,
    })
})