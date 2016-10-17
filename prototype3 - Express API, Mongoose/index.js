import express from 'express';
import cors from 'cors';
import user from './api/user';
import application from './api/application';

const app = express();

app.use(cors());

app.use(user);
app.use(application);

const port = 3030;

app.listen(port, () => {
    console.info(`API is listening on ${port}`);
});
