import { Router } from 'express';
import Customer from './database/Customer';

const router = new Router();

// const Vlad = new Customer({ name: "Vlad" });
// Vlad.save();

router.get('/data', async (req, res) => {
    try {
        const collection = await Customer.find({ name: "A Kudic" });
        const count = await Customer.count({ name: "A Kudic" });

        res.send({ collection, count });
    } catch (error) {
       res.status(400).send(error);
    }

    // Customer.find().exec((error, collection) => {
    //     if (error) {
    //         res.status(400).send(error);
    //     }

    //     res.send({ collection });
    // });
});

export default router;
