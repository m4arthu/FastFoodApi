import {orderRepository} from '../repositorys/order.repository.js';

const createOrder = async (data) => {
  // verificar se o  produo  existe
  // se  tiver acomponhamentos fazer a requsição
  // se não  tiver apenas criar o pedido
  return await orderRepository.createOrder(data);
};

const updateOrder = async (data) => {
  // verificar se o  produo  existe
  // verificar se a order existe
  // se  tiver acomponhamentos fazer a requsição
  // se não  tiver apenas criar o pedido
  return await orderRepository.updateOrder(data);
};

export const orderSerivce = {
  createOrder,
  updateOrder,
};
