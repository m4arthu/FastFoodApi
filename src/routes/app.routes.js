import {Router} from 'express';
import {ProductController} from '../controllers/product.controller.js';
import {orderController} from '../controllers/order.constroller.js';
import {validateBody} from '../middleweres/validateBody.middlewere.js';
import {orderSchema} from '../schemas/order.schema.js';

export const appRoutes = Router();

appRoutes.get('/', ProductController.getProducts);
appRoutes.post('/orders', validateBody(orderSchema),
    orderController.createOrder);
