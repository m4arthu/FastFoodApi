import express, {json} from 'express';
import cors from 'cors';

export const app = express();
app.use(json());
app.use(cors());
