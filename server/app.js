import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cropRoutes from './Routes/cropRoutes.js'; // Example of imported route

dotenv.config(); // Load environment variables from .env file

const app = express();

// Middlewares
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse incoming JSON requests

// Routes
app.use('/api/crops', cropRoutes); // Mount crop routes

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Something went wrong!' });
});

export default app;
