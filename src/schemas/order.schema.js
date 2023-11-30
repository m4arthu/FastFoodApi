import Joi from "joi";

export const  orderSchema = Joi.object({
    description: Joi.string().required(),
    username: Joi.string().required(),
    productId: Joi.number().integer().required(),
})