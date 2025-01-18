import axios from 'axios';

export const fetchMarketData = async (details) => {
  const { cropName, quantity, location } = details;
  const response = await axios.post('/api/get-market-data', {
    cropName,
    quantity,
    location,
  });
  return response.data;
};
