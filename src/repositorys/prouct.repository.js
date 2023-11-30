import { prisma } from "../../prisma/prisma.js"

const  getProducts = async() => {
    return await prisma.product.findMany({})
}


export const productRepository = {
    getProducts
}