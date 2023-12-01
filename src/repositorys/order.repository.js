import { prisma } from '../../prisma/prisma.js';

const createOrder = async (data) => {
  return await prisma.order.create({
    data: {
      ...data, productId: Number(data.productId),
      quantity: Number(data.quantity)
    },
  });
};

const updateOrder = async (data) => {
  return await prisma.order.update({
    where: { id: data.orderId },
    data: {
      isFinished: Boolean(data.isFinished),
    },
  });
};

const getOrderById = async (orderId) => {
  return await prisma.order.findFirst({
    where: { id: orderId },
  });
};

export const orderRepository = {
  createOrder,
  updateOrder,
  getOrderById,
};
