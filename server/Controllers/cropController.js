import Crop from '../models/Crop.js';

export const getCrops = async (req, res) => {
  try {
    const { name } = req.query;
    const crops = await Crop.findAll({
      where: {
        name: { $iLike: `%${name}%` }, // Case-insensitive match
      },
    });
    res.status(200).json(crops);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching crops' });
  }
};
