import {notFoundError} from '../errors/app.errors.js';
import {orderRepository} from '../repositorys/order.repository.js';
import {productRepository} from '../repositorys/prouct.repository.js';

const createOrder = async (data) => {
  const product = await productRepository.getProductById(data.orderId);
  if (product === null) {
    throw notFoundError('não foi  possivel achar o produto');
  }

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
export const orderSerivce = {
  createOrder,
  updateOrder,
  getOrders,
};
