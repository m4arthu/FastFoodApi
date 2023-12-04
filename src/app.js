import express, {json} from 'express';
import 'express-async-errors';
import cors from 'cors';
import sweagerUI from 'swagger-ui-express';
import {appRoutes} from './routes/app.routes.js';
import {errorHandler} from './middleweres/errorHandler.middlewere.js';
import swaggerJson from '../sweagger.json' assert { type: 'json' };


export const app = express();
app.use(json());
app.use(cors());
app.use('/', appRoutes);
app.use('/api-docs',sweagerUI.serve,sweagerUI.setup(swaggerJson))
app.use(errorHandler);
