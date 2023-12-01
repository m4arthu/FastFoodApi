import { faker } from "@faker-js/faker"
import { prisma } from "../../prisma/prisma"

export const createOrder = async(productId) => {
    const data = {
        username:faker.person.firstName(),
        description:faker.word.words(7),
        quantity:faker.number.int(1,5),
        productId: productId
    }
    return await prisma.order.create({
        data: data
    })
}