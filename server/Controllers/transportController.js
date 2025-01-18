const Transportation = require('../Models/Transportation');

// Get transportation cost between origin and destination
exports.getTransportationCost = async (req, res) => {
  const { origin, destination } = req.query;

  try {
    const transport = await Transportation.findOne({
      where: {
        origin: origin,
        destination: destination
      }
    });
    if (transport) {
      res.status(200).json(transport);
    } else {
      res.status(404).json({ message: "No transportation route found." });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
