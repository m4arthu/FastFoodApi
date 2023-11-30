import {orderSerivce} from '../services/order.service.js';
const createOrder = async (req, res) => {
  const data = req.body;
  const order =  await orderSerivce.createOrder(data);
  return res.status(201).send(order);
};

export const orderController = {
  createOrder,
};
