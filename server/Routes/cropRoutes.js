import express from 'express';
import { Sequelize } from 'sequelize';  // Import Sequelize to access Op for operators
import { Crop } from '../Models/crop.js';  // Import the Crop model

const router = express.Router();

// Route to get all crops
router.get('/search-crops', async (req, res) => {
  const { name } = req.query;  // Get the crop name from the query parameter

  try {
    // Use Sequelize to find matching crops
    const crops = await Crop.findAll({
      where: {
        name: {
          [Sequelize.Op.like]: `%${name}%`,  // Using Sequelize's LIKE operator for search
        },
      },
    });

    res.json(crops);  // Return the matching crops as JSON
  } catch (error) {
    console.error('Error fetching crops:', error);
    res.status(500).json({ error: 'Failed to fetch crops' });
  }
});

export { router };  // Export the router for use in the app
