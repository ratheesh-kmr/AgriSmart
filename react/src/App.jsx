import { useState } from 'react';
import InputForm from './components/InputForm';
import Results from './pages/Results';
import { fetchMarketData as fetchMarketDataFromAPI } from './services/api'; // Ensure this matches your structure

function App() {
  const [cropDetails, setCropDetails] = useState(null);
  const [marketData, setMarketData] = useState(null);

  const fetchMarketData = async (details) => {
    try {
      const data = await fetchMarketDataFromAPI(details);
      setMarketData(data); // Set the fetched market data
    } catch (error) {
      console.error('Error fetching market data:', error);
    }
  };

  const handleCropDetails = (details) => {
    setCropDetails(details);
    fetchMarketData(details); // Fetch market data based on crop details
  };

  return (
    <div>
      {!cropDetails ? (
        <InputForm setCropDetails={handleCropDetails} />
      ) : (
        <Results cropDetails={cropDetails} marketData={marketData} />
      )}
    </div>
  );
}

export default App;
