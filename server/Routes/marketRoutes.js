// backend/routes/marketRoutes.js

import express from 'express';
const router = express.Router();

// Example route to get market data
router.get('/', async (req, res) => {
  try {
    const markets = await markets.findAll(); // Your database query logic here
    res.json(markets);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching markets' });
  }
});

export default router;  // Default export for the router
