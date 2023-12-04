import {notFoundError} from '../errors/app.errors.js';
import {orderRepository} from '../repositorys/order.repository.js';

const createOrder = async (data) => {
  return await orderRepository.createOrder(data);
};

const updateOrder = async (data) => {
  const order = await orderRepository.getOrderById(data.orderId);
  if (order === null) {
    throw notFoundError('não foi  possivel achar o pedido');
  }
  return await orderRepository.updateOrder(data);
};

const getOrders = async () => {
  return await orderRepository.getrOrders();
};
const deleteOrder =async(orderId) => {
  return await orderRepository.deleteOrder(orderId)
}
export const orderSerivce = {
  createOrder,
  updateOrder,
  getOrders,
  deleteOrder
};
