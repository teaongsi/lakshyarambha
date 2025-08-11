import dotenv from "dotenv";
dotenv.config();
import express from "express";

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
    res.status(200).send("This is home page");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});