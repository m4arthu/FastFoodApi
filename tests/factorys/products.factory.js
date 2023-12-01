import { prisma } from "../../prisma/prisma.js"
import { faker } from "@faker-js/faker"
export const createProducts = async (numero) => {
   const products = []
   for (let i = 1; i <= numero; i++) {
      const data = {
         name: faker.word.adverb(),
         price: faker.number.int(1000, 20000),
         description: "Muiitoobommm",
         imageUrl:"../../assets/hamburguer.png"
      }
      const product = await prisma.product.create({ data })
      products.push(product)
   }
   return products
}