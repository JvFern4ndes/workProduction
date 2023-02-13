import express from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose.set('strictQuery', true);

mongoose.connect('mongodb://localhost:27017')
  .then(() => console.log('Conectado ao mongoDB'))
  .catch(() => console.log('Erro ao conectar ao mongoDB'));

const port = 3001;
app.listen(3001, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
