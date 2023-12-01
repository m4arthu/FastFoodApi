import { prisma } from "./prisma.js"

async function main() {
    await prisma.product.create({
        data: {
            name: "hamburguer",
            description: "dawdwad da wdadawda dawd ",
            imageUrl:"../../assets/hamburguer.png",
            price: 2222
        }
    })
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })