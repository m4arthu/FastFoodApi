import {prisma} from '../../prisma/prisma.js';

const createOrder = async (data) => {
  const order = await prisma.order.create({data: {username: data.username}});
  const orderData = data.products.map((product) => {
    return {...product, order_id: order.id};
  });
  return await prisma.orderProducts.createMany({
    data: orderData,
  });
};

const updateOrder = async (data) => {
  return await prisma.order.update({
    where: {id: data.orderId},
    data: {
      isFinished: Boolean(data.isFinished),
    },
  });
};

const getOrderById = async (orderId) => {
  return await prisma.order.findFirst({
    where: {id: orderId},
  });
};

const getrOrders = async () => {
  return await prisma.order.findMany({
    include: {
      OrderProducts: {
        include: {
          Products: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });
};

const deleteOrder = async (orderId) => {
  await prisma.orderProducts.deleteMany({
    where:{order_id:orderId}
  })
  await prisma.order.delete({
    where:{id:orderId}
  })

}

export const orderRepository = {
  createOrder,
  updateOrder,
  getOrderById,
  getrOrders,
  deleteOrder
};
