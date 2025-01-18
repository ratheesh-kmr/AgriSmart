import express from 'express';
import { Crop } from '../Models/crop.js';  // Sequelize model for crops

const router = express.Router();

// API to get all crops
router.get('/', async (req, res) => {
  try {
    const crops = await Crop.findAll();  // Database query to fetch all crops
    res.json(crops);  // Return the crops as a JSON response
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching crops in crop routes' });
  }
});

export { router };  // Export the router for use in the app
