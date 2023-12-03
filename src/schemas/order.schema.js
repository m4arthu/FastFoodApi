import Joi from 'joi';

export const createOrderSchema = Joi.object({
  username: Joi.string().required(),
  products: Joi.array().items(
    Joi.object({
      description: Joi.string().required(),
      product_id: Joi.number().integer().required(),
      quantity: Joi.number().integer().required()
    }).required()
  ).required(),
  isFinished: Joi.boolean()
});

export const updateOrderSchema = Joi.object({
  isFinished: Joi.boolean().required(),
  orderId: Joi.number().integer().required(),
});
