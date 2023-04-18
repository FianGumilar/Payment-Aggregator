import * as Joi from 'joi';


export const PasswordRecoverSchema = Joi.object().keys({
    email: Joi.string().required().email({
        minDomainSegments: 1,
        tlds: { allow: ["com"]}
    }),
})