import express from "express";

const app = express();
const port = 8000;

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Request handled successfully"
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});