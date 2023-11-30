import express, {json} from 'express';
import cors from 'cors';
import {appRoutes} from './routes/app.routes.js';

export const app = express();
app.use(json());
app.use(cors());
app.use('/', appRoutes);
