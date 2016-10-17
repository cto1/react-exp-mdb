import { Router } from 'express';
import User from './database/User';

const router = new Router();

// const Vlad = new User({ name: "Vlad" });
// Vlad.save();

router.get('/user', async (req, res) => {
    try {
        const collection = await User.find({ name: "aleks" });
        const count = await User.count({ name: "aleks" });

        res.send({ collection, count });
    } catch (error) {
       res.status(400).send(error);
    }

    // User.find().exec((error, collection) => {
    //     if (error) {
    //         res.status(400).send(error);
    //     }

    //     res.send({ collection });
    // });
});

export default router;
