import express from 'express';
import cors from 'cors';
import data from './api/data';

const app = express();

app.use(cors());

app.use(data);

const port = 3030;

app.listen(port, () => {
    console.info(`API is listening on ${port}`);
});
