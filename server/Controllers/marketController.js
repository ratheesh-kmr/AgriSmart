import Market from '../models/Market.js';
import { calculateProfit } from '../utils/profitUtils.js';

export const getMarketData = async (req, res) => {
  try {
    const { cropId, quantity, location } = req.body;

    const markets = await Market.findAll();
    const results = markets.map((market) => {
      const transportCost = calculateProfit(location, market.location, quantity);
      const netProfit =
        quantity * market.pricePerUnit - transportCost.totalCost;

      return {
        market: market.name,
        location: market.location,
        transportCost,
        netProfit,
      };
    });

    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching market data' });
  }
};
