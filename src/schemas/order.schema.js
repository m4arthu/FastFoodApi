import Joi from 'joi';

export const createOrderSchema = Joi.object({
  description: Joi.string().required(),
  username: Joi.string().required(),
  productId: Joi.number().integer().required(),
  isFinished: Joi.boolean(),
  items: Joi.array(),
});
export const updateOrderSchema = Joi.object({
  isFinished: Joi.boolean().required(),
  orderId: Joi.number().integer().required(),
});
