import {orderSerivce} from '../services/order.service.js';
const createOrder = async (req, res) => {
  const data = req.body;
  const order = await orderSerivce.createOrder(data);
  return res.status(201).send(order);
};

const updateOrder = async (req, res) => {
  const data = req.body;
  const order = await orderSerivce.updateOrder(data);
  return res.status(201).send(order);
};

const getOrders =async (req, res) => {
  const orders = await orderSerivce.getOrders();
  res.send(orders);
};

const  deleteOrder = async (req,res) => {
  const orderId =  req.params.id
  const deleteOrder =  await orderSerivce.deleteOrder(Number(orderId))
  res.status(204).send()
}
export const orderController = {
  createOrder,
  updateOrder,
  getOrders,
  deleteOrder
};
