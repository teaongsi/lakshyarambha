import express from 'express';
import User from './models/user-model.js';

const app = express();

app.post('/user', async (req, res) => {
    const user = await User.create({
        name: "tong",
        email: "tong@dev.com",
        password: "tongtong"
    })

    res.status(200).send(user);
})

export default app;