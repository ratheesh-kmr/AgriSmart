import { calculateDistance } from './geoUtils.js';

export const calculateProfit = (from, to, quantity) => {
  const distance = calculateDistance(from, to);
  const costPerKm = 5; // Example value
  const totalCost = distance * costPerKm;

  return { distance, costPerKm, totalCost };
};
