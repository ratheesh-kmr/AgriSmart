import express from 'express';
import { Market } from '../Models/Market.js';  // Import the Market model

const router = express.Router();

// API endpoint to get all markets
router.get('/api/markets', async (req, res) => {
  try {
    const markets = await Market.findAll();  // Fetch all records from the markets table
    res.json(markets);  // Return the results as JSON
  } catch (error) {
    console.error('Error fetching markets:', error);
    res.status(500).json({ error: 'Error fetching markets from the database' });
  }
});

export default router;
