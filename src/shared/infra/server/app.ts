import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import helmet from 'helmet';

import 'reflect-metadata';
import 'express-async-errors';
import 'dotenv/config';
import '@shared/container';

import { AppError } from '@shared/errors/AppError';

import { morganMiddleware } from './middlewares/morgan';
import { router } from './routes';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morganMiddleware);

app.use('/api', router);

app.use((err: Error, _request: Request, response: Response, _next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: `Internal server error - ${err.message} `,
  });
});

export { app };
