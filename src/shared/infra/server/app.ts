import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

import 'dotenv/config';
import 'reflect-metadata';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export { app };
