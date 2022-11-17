import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

import 'dotenv/config';
import 'reflect-metadata';

import { morganMiddleware } from './middlewares/morgan';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morganMiddleware);

export { app };
