import {orderSerivce} from '../services/order.service.js';
const createOrder = async (req, res) => {
  const data = req.body;
  return await orderSerivce.createOrder(data);
};

export const orderController = {
  createOrder,
};
