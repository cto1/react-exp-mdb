import { Router } from 'express';

const router = new Router();

const timeStamp = Date.now();

const data = [
  { id: 1, author: 'Pete Hunt', text: 'This is one comment' , timeStamp: Date.now() },
  { id: 2, author: 'Jordan Walke', text: 'This is *another* comment' , timeStamp: Date.now() },
];

router.get('/data', (req, res) => {
    const {
        url,
        params,
        query,
        body,
    } = req;

    res.send({ collection: data, count: data.length });
});

export default router;
