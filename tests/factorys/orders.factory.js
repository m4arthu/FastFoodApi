import { faker } from "@faker-js/faker"
import { prisma } from "../../prisma/prisma"

export const createOrder = async(orderProducts) => {
    const order = await prisma.order.create({data: {username: orderProducts.username}});
    const orderData = orderProducts.products.map((product) => {
      return {...product, order_id: order.id};
    });
    return await prisma.orderProducts.createMany({
      data: orderData,
    });
}