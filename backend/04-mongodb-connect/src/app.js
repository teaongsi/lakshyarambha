import express from 'express';
import userRouter from '../router/userRoute.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api",userRouter);

export default app;