import {prisma} from '../../prisma/prisma.js';

const createOrder = async (data) => {
  return await prisma.order.create({
    data: {...data, productId: Number(data.productId)},
  });
};

const updateOrder =  async(data) => {
  return await prisma.order.update({
    where: {id:data.orderId},
    data: {
      isFinished:Boolean(data.isFinished),
    }
  })
}

export const orderRepository ={
  createOrder,
  updateOrder
};
