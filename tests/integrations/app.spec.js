import { createProducts } from "../factorys/products.factory.js";
import { ClearDb } from "../utils.js";
import supertest from "supertest"
import { app } from "../../src/app.js";
import { createOrder } from "../factorys/orders.factory.js";

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
        }]));
    })
})


describe("POST Orders", () => {
    
    test("shold return 404 when product no found", async () => {
        const data = {
            username: "luis",
            description: "sem cebola",
            productId: 1
        }
        const response = await api.post("/orders").send(data)
        expect(response.status).toBe(404)
    });
    
    
    test("shold return an order when body is correct", async () => {
        const pruducts = await createProducts(1)
        const data = {
            username: "luis",
            description: "sem cebola",
            productId: pruducts[0].id
        }
        const response = await api.post("/orders").send(data)
        expect(response.body).toMatchObject({
            id: expect.any(Number),
            username: expect.any(String),
            description: expect.any(String),
            productId: expect.any(Number),
            isFinished: false
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
        const order = await createOrder(pruducts[0].id)
        const data = {
            isFinished: true,
            orderId: order.id
        }
        const response = await api.put("/orders").send(data)
        expect(response.body).toMatchObject({
            id: expect.any(Number),
            username: expect.any(String),
            description: expect.any(String),
            productId: expect.any(Number),
            isFinished: true
        });
    })
})