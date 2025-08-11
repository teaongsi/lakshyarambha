import express from 'express';

const app = express();
const port = 8000;

function logger(req, res, next) {
    const date = new Date();
    console.log(`Request method: ${req.method}\nURL: ${req.url}\nTimestamp: ${date.toISOString()}`);
    next();
};
app.use(logger);

app.get('/home', (req, res) => {
    res.send('Hello, World!');
})

app.listen( port, () => {
    console.log(`Server is running on port ${port}`);
})