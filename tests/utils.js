import {prisma}  from "../prisma/prisma.js"

export const  ClearDb = async() => {
   await prisma.extra.deleteMany({});
   await prisma.orderProducts.deleteMany({})
   await prisma.order.deleteMany({});
   await prisma.product.deleteMany({});
}