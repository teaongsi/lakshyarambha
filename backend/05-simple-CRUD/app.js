import express from 'express';
import mongoose from 'mongoose';
import router from './routes/productRoutes.js';
import "dotenv/config";

const app = express();
const port = process.env.PORT;
const dburi = process.env.dbURI;

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use("/api/products", router);

const startServer = async () => {
    try {
        await mongoose.connect(dburi);
        console.log("Database connected successfully");

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (err) {
        console.error("Database connection failed:", err.message);
    }
};
startServer();