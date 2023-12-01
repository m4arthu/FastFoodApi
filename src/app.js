import express, {json} from 'express';
import "express-async-errors"
import cors from 'cors';
import {appRoutes} from './routes/app.routes.js';
import { errorHandler } from './middleweres/errorHandler.middlewere.js';

export const app = express();
app.use(json());
app.use(cors());
app.use('/', appRoutes);
app.use(errorHandler)
