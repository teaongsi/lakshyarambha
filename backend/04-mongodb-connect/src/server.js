import http from 'http';
import app from './app.js';
import dotenv from 'dotenv';
import connectDB from "./config/db.js";

dotenv.config();
  
const server = http.createServer(app);
const port = process.env.PORT || 8000;
 
const startServer = async () => {
    await connectDB(); 
    server.listen(8000, () => {
        console.log(`Server is running on port ${port}`);
    });
};

startServer();