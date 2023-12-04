import { createProducts } from "../factorys/products.factory.js";
import { ClearDb } from "../utils.js";
import supertest from "supertest";
import { app } from "../../src/app.js";
import { createOrder } from "../factorys/orders.factory.js";
import { prisma } from "../../prisma/prisma.js";

const api = supertest(app)

beforeEach(async () => {
    return await ClearDb()
})

describe("GET Products", () => {
    test("shold return an array  of products", async () => {
        const pruducts = await createProducts(2)
        const response = await api.get("/")
        expect(response.body).toEqual(expect.arrayContaining([{
            description: expect.any(String),
            id: expect.any(Number),
            name: expect.any(String),
            price: expect.any(Number),
            imageUrl: expect.any(String),
            bgColor: "red"
        }]));
    })
})


describe("POST Orders", () => {

    test("shold return 404 when product no found", async () => {
        const data = {
            username: "luis artthur",
            products: [{
                description: "dawdawd",
                product_id: 1,
                quantity: 2
            }]
        }
        const response = await api.post("/orders").send(data)
        console.log(response.text)
        expect(response.status).toBe(404)
    });


    test("shold return an order when body is correct", async () => {
        const pruducts = await createProducts(1)
        const data = {
            username: "luis artthur",
            products: [{
                description: "dawdawd",
                product_id: pruducts[0].id,
                quantity: 2
            }]
        }
        const response = await api.post("/orders").send(data)
        expect(response.body).toMatchObject({
            count: 1
        });
    })
})

describe("update Orders", () => {
    test("shold return 404 when order no found", async () => {
        const data = {
            isFinished: true,
            orderId: 1
        }
        const response = await api.put("/orders").send(data)
        expect(response.status).toBe(404)
    });

    test("shold return an order with isfinished: true when body is correct", async () => {
        const pruducts = await createProducts(1)
        const productsbody = {
            username: "luis artthur",
            products: [{
                description: "dawdawd",
                product_id: pruducts[0].id,
                quantity: 2
            }]
        }
        await createOrder(productsbody)
        const order = await prisma.order.findFirst({})
        const data = {
            isFinished: true,
            orderId: order.id
        }
        const response = await api.put("/orders").send(data)
        expect(response.body).toMatchObject({
            id: expect.any(Number),
            username: expect.any(String),
            isFinished: true
        });
    })

    test("shold return 204 when order  deleted", async () => {
        const pruducts = await createProducts(1)
        const productsbody = {
            username: "luis artthur",
            products: [{
                description: "dawdawd",
                product_id: pruducts[0].id,
                quantity: 2
            }]
        }
        await createOrder(productsbody)
        const order = await prisma.order.findFirst({})
        const response = await api.delete(`/orders/${order.id}`)
        expect(response.status).toBe(204)
    });
})
