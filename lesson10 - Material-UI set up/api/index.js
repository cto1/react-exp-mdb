import express from 'express';
import cors from 'cors';
import data from './data';

const API_PORT = process.env.API_PORT || 3030;

const api = express();

api.use(cors());

api.use(data);

api.listen(API_PORT, () => {
  console.info(`API is listening on ${API_PORT}`);
});
