import {prisma} from "../../prisma/prisma.js"

const  createOrder = async(data) => {
    return await prisma.order.create({
        data: {...data,productId:Number(data.productId)}
    })
}

export const orderRepository ={
    createOrder
}