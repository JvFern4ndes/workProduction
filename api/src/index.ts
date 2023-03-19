import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';

import { router } from './router';

import { validate } from '../src/app/useCases/Auth/authMiddleware';

mongoose.set('strictQuery', true);

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();
    const port = 3001;

    // app.use(validate);
    app.use(morgan('dev'));
    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(express.json());
    app.use(router);

    app.listen(3001, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`);
    });
  })
  .catch(() => console.log('Erro ao conectar ao mongoDB'));


