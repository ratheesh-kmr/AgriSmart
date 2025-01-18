// In your server.js or a specific routes file (e.g., cropRoutes.js)
import express from 'express';
import appDB from './config/db.js';

const router = express.Router();

// Endpoint to search for crops
router.get('/search-crops', async (req, res) => {
  const searchQuery = req.query.name.toLowerCase();
  try {
    const result = await appDB.query(
      'SELECT name FROM crops WHERE LOWER(name) LIKE $1 LIMIT 5',
      [`%${searchQuery}%`]
    );
    res.json(result.rows); // Return the crop names
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching crops' });
  }
});

export default router;
