import {Router} from 'express';
import {ProductController} from '../controllers/product.controller.js';
import {orderController} from '../controllers/order.constroller.js';
import {validateBody} from '../middleweres/validateBody.middlewere.js';
import {createOrderSchema, updateOrderSchema} from '../schemas/order.schema.js';

export const appRoutes = Router();

appRoutes.get('/', ProductController.getProducts);
appRoutes.post('/orders', validateBody(createOrderSchema),
    orderController.createOrder);
appRoutes.put('/orders', validateBody(updateOrderSchema),
    orderController.updateOrder);
appRoutes.get('/orders', orderController.getOrders)
