import { prisma } from "./prisma.js"

async function main() {
    await prisma.product.create({
        data: {
            name: "hamburguer",
            description: "dawdwad da wdadawda dawd ",
            imageUrl:"../../assets/hamburguer.png",
            price: 2222,
            bgColor:"green"
        }
    })
    await prisma.product.create({
        data: {
            name: "Mhamburguer",
            description: "dawdwad da wdadawda dawd ",
            imageUrl:"../../assets/hamburguer.png",
            price: 3333,
            bgColor:"yellow"
        }
    })
    await prisma.product.create({
        data: {
            name: "Lhamburguer",
            description: "dawdwad da wdadawda dawd ",
            imageUrl:"../../assets/hamburguer.png",
            price: 4444,
            bgColor:"red" 
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