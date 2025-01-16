const express = require('express');
const cors = require('cors');
const cropRoutes = require('./Routes/cropRoutes');
const marketRoutes = require('./Routes/marketRoutes');
const transportationRoutes = require('./Routes/transportationRoutes');
const { connectDB } = require('./config/db');
require('dotenv').config();

// Initialize Express app
const app = express();

// Database connection
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api', cropRoutes);
app.use('/api', marketRoutes);
app.use('/api', transportationRoutes);

module.exports = app;
