import { Router } from 'express';
import Application from './database/Application';

const router = new Router();

// const Vlad = new Application({ name: "Vlad" });
// Vlad.save();

router.get('/application', async (req, res) => {
    try {
        const collection = await Application.find({ name: "A Kudic" });
        const count = await Application.count({ name: "A Kudic" });

        res.send({ collection, count });
    } catch (error) {
       res.status(400).send(error);
    }

    // Application.find().exec((error, collection) => {
    //     if (error) {
    //         res.status(400).send(error);
    //     }

    //     res.send({ collection });
    // });
});

export default router;
